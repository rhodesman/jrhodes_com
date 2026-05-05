import { useCallback, useEffect, useRef, useState } from 'react';

// ─── Canvas ──────────────────────────────────────────────────────────────────
const W = 320;
const H = 240;

// ─── Road ────────────────────────────────────────────────────────────────────
const SEG_LEN = 200;
const DRAW_DIST = 120;
const ROAD_W = 500;          // half-width in world units (controls how wide road appears)
const RUMBLE_W = 50;
const LANES = 3;
const CAM_H = 900;
const FOV = 80;
const CAM_D = 1 / Math.tan((FOV / 2) * Math.PI / 180);

// ─── Player tuning ──────────────────────────────────────────────────────────
const MAX_SPEED = SEG_LEN * 65;
const ACCEL = MAX_SPEED / 80;
const BRAKE_F = -MAX_SPEED / 45;
const DECEL_N = -MAX_SPEED / 250;     // coasting decel
const OFF_ROAD_DECEL = -MAX_SPEED / 20;
const OFF_ROAD_MAX = MAX_SPEED / 4;
const STEER_DX = 2.0;                 // playerX change per second at full speed
const CENTRIFUGAL = 0.3;

// ─── Colours ─────────────────────────────────────────────────────────────────
const C = {
  sky1: '#72d2f0', sky2: '#3eb8e0', sun: '#fff4b8',
  mtn1: '#5d8c5e', mtn2: '#4a7a4c',
  tree1: '#336b35', tree2: '#2a5a2c', trunk: '#5c3a1a',
  grass_l: '#4caf50', grass_d: '#388e3c',
  rumble_l: '#ff1744', rumble_d: '#dddddd',
  road_l: '#6b6b6b', road_d: '#606060',
  lane_m: '#cccccc',
  carR: '#cc0000', carR2: '#990000',
  carW: '#99ddff', carWh: '#222222',
  brake: '#ff0000', tail: '#ffcc00',
  signP: '#888', sign: '#3344aa', hud: '#fff',
};
const NPC_C = ['#2255cc', '#ddaa00', '#dddddd', '#22aa44', '#cc4400', '#8822aa'];

// ─── PRNG ────────────────────────────────────────────────────────────────────
function prng(seed: number) {
  let s = seed;
  return () => { s = (s * 1103515245 + 12345) & 0x7fffffff; return s / 0x7fffffff; };
}

// ─── Track data ──────────────────────────────────────────────────────────────
interface Seg { curve: number; y: number; sprites: Spr[]; clip: number; }
interface Spr { off: number; kind: 'tree' | 'palm' | 'bush' | 'sign' | 'rock'; }
interface Npc { z: number; lane: number; speed: number; col: string; }

function buildTrack() {
  const segs: Seg[] = [];

  const add = (n: number, curve: number, hill: number) => {
    for (let i = 0; i < n; i++) {
      const ease = Math.sin((i / n) * Math.PI); // smooth in/out
      segs.push({ curve: curve * ease, y: hill * ease, sprites: [], clip: 0 });
    }
  };

  // Track layout
  add(50, 0, 0);        // straight
  add(40, 3, 0);        // easy right
  add(30, -4, 0);       // medium left
  add(35, 0, 35);       // uphill
  add(25, 0, -25);      // downhill
  add(50, 5, 0);        // hard right
  add(30, -3, 15);      // left + hill
  add(45, 0, 0);        // straight
  add(40, -6, 0);       // sharp left
  add(30, 4, -30);      // right + downhill
  add(50, 0, 0);        // straight
  add(35, 3, 12);       // gentle right + bump
  add(30, -5, 0);       // sharp left
  add(45, 0, 0);        // straight
  add(35, 4, -18);      // right + descent
  add(25, -2, 20);      // left + climb
  add(50, 0, 0);        // finish straight

  // Accumulate elevation
  let cumY = 0;
  for (const s of segs) {
    const dy = s.y;
    cumY += dy;
    s.y = cumY;
  }

  // Roadside sprites
  const r = prng(42);
  const kinds: Spr['kind'][] = ['tree', 'palm', 'bush', 'sign', 'rock'];
  for (let i = 15; i < segs.length; i++) {
    if (r() < 0.4) {
      const side = r() < 0.5 ? -1 : 1;
      segs[i].sprites.push({ off: side * (1.2 + r() * 2.2), kind: kinds[Math.floor(r() * kinds.length)] });
    }
    if (r() < 0.15) {
      segs[i].sprites.push({ off: (r() < 0.5 ? -1 : 1) * (1.3 + r() * 1.5), kind: kinds[Math.floor(r() * 3)] });
    }
  }

  // NPC cars — evenly spaced
  const tl = segs.length * SEG_LEN;
  const npcs: Npc[] = [];
  const count = 80;
  const sp = tl / count;
  for (let i = 0; i < count; i++) {
    npcs.push({
      z: (i * sp + r() * sp * 0.5) % tl,
      lane: Math.floor(r() * 3) - 1,
      speed: MAX_SPEED * (0.25 + r() * 0.3),
      col: NPC_C[Math.floor(r() * NPC_C.length)],
    });
  }

  return { segs, npcs, len: tl };
}

// ─── Projection (Jake Gordon method) ─────────────────────────────────────────
// Projects a world point to screen. cameraX includes curve offset.
function proj(worldY: number, worldZ: number, camX: number, camY: number, camZ: number) {
  const cz = worldZ - camZ;
  if (cz <= 0) return null;
  const scale = CAM_D / cz;
  return {
    x: Math.round(W / 2 + scale * (-camX) * W / 2),
    y: Math.round(H / 2 - scale * (worldY - camY) * H / 2),
    w: Math.round(scale * ROAD_W * W / 2),
    scale,
  };
}

// ─── Draw helpers ────────────────────────────────────────────────────────────
function quad(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number,
  x3: number, y3: number, x4: number, y4: number, col: string) {
  ctx.fillStyle = col;
  ctx.beginPath();
  ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.lineTo(x3, y3); ctx.lineTo(x4, y4);
  ctx.closePath(); ctx.fill();
}

function drawBG(ctx: CanvasRenderingContext2D, curveBias: number) {
  const grd = ctx.createLinearGradient(0, 0, 0, H * 0.55);
  grd.addColorStop(0, C.sky1); grd.addColorStop(1, C.sky2);
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, W, Math.ceil(H * 0.55));

  const sx = W / 2 - curveBias * 25;
  ctx.fillStyle = C.sun;
  ctx.globalAlpha = 0.3;
  ctx.beginPath(); ctx.arc(sx, 48, 28, 0, Math.PI * 2); ctx.fill();
  ctx.globalAlpha = 1;
  ctx.beginPath(); ctx.arc(sx, 48, 16, 0, Math.PI * 2); ctx.fill();

  const base = Math.ceil(H * 0.52);
  const off = -curveBias * 10;
  ctx.fillStyle = C.mtn1;
  for (let i = 0; i < 9; i++) {
    const mx = i * 48 - 30 + off, mh = 18 + (i % 3) * 14 + (i % 2) * 9;
    ctx.beginPath(); ctx.moveTo(mx, base); ctx.lineTo(mx + 22, base - mh); ctx.lineTo(mx + 44, base); ctx.fill();
  }
  ctx.fillStyle = C.mtn2;
  for (let i = 0; i < 7; i++) {
    const mx = i * 60 + 5 + off * 1.4, mh = 12 + (i % 2) * 10;
    ctx.beginPath(); ctx.moveTo(mx, base); ctx.lineTo(mx + 18, base - mh); ctx.lineTo(mx + 36, base); ctx.fill();
  }
}

function drawSprite(ctx: CanvasRenderingContext2D, kind: Spr['kind'], x: number, y: number, s: number, clip: number) {
  if (s < 0.004 || y < clip) return;
  const h = s * 55;
  // Save and clip so sprites don't draw above hills
  ctx.save();
  ctx.beginPath();
  ctx.rect(0, clip, W, H - clip);
  ctx.clip();

  switch (kind) {
    case 'tree':
      ctx.fillStyle = C.trunk;
      ctx.fillRect(x - s * 3, y - h * 0.6, Math.max(1, s * 6), h * 0.6);
      ctx.fillStyle = C.tree1;
      ctx.beginPath(); ctx.arc(x, y - h * 0.75, Math.max(1, s * 16), 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = C.tree2;
      ctx.beginPath(); ctx.arc(x - s * 5, y - h * 0.6, Math.max(1, s * 9), 0, Math.PI * 2); ctx.fill();
      break;
    case 'palm':
      ctx.fillStyle = C.trunk;
      ctx.fillRect(x - s * 2, y - h, Math.max(1, s * 4), h);
      ctx.fillStyle = C.tree1;
      for (let a = -2; a <= 2; a++)
        ctx.fillRect(x + a * s * 7 - s * 3, y - h - s * 3, Math.max(1, s * 10), Math.max(1, s * 5));
      break;
    case 'bush':
      ctx.fillStyle = C.tree1;
      ctx.beginPath(); ctx.arc(x, y - s * 7, Math.max(1, s * 10), 0, Math.PI * 2); ctx.fill();
      break;
    case 'sign':
      ctx.fillStyle = C.signP;
      ctx.fillRect(x - s, y - h * 0.75, Math.max(1, s * 2), h * 0.75);
      ctx.fillStyle = C.sign;
      ctx.fillRect(x - s * 8, y - h * 0.85, Math.max(1, s * 16), Math.max(1, s * 12));
      break;
    case 'rock':
      ctx.fillStyle = '#888';
      ctx.beginPath(); ctx.arc(x, y - s * 4, Math.max(1, s * 7), 0, Math.PI * 2); ctx.fill();
      break;
  }
  ctx.restore();
}

function drawNpc(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, col: string, clip: number) {
  if (y < clip || w < 2) return;
  const h = Math.round(w * 0.72);
  ctx.save();
  ctx.beginPath(); ctx.rect(0, clip, W, H - clip); ctx.clip();
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(x - w / 2, y + 1, w, Math.max(1, h * 0.12));
  ctx.fillStyle = col;
  ctx.fillRect(x - w / 2, y - h, w, h);
  ctx.fillStyle = C.carW;
  const ww = Math.max(1, Math.round(w * 0.65));
  ctx.fillRect(x - ww / 2, y - h + Math.round(h * 0.1), ww, Math.max(1, Math.round(h * 0.25)));
  ctx.restore();
}

function drawPlayerCar(ctx: CanvasRenderingContext2D, steer: number, speed: number, braking: boolean) {
  const cx = W / 2;
  const by = H - 12 + (speed > 0 ? Math.round(Math.sin(Date.now() * 0.015) * (speed / MAX_SPEED) * 1.2) : 0);
  const t = Math.round(steer * 8);

  ctx.fillStyle = 'rgba(0,0,0,0.3)';
  ctx.fillRect(cx - 15, by + 2, 30, 3);
  ctx.fillStyle = C.carWh;
  ctx.fillRect(cx - 15 + t, by - 3, 4, 5);
  ctx.fillRect(cx + 11 + t, by - 3, 4, 5);
  ctx.fillRect(cx - 13 + t, by - 13, 3, 4);
  ctx.fillRect(cx + 10 + t, by - 13, 3, 4);
  ctx.fillStyle = C.carR;
  ctx.fillRect(cx - 13 + t, by - 11, 26, 13);
  ctx.fillStyle = C.carR2;
  ctx.fillRect(cx - 11 + t, by - 7, 22, 3);
  ctx.fillStyle = C.carW;
  ctx.fillRect(cx - 9 + t, by - 17, 18, 7);
  ctx.fillStyle = C.carR;
  ctx.fillRect(cx - 11 + t, by - 18, 22, 2);
  ctx.fillStyle = braking ? C.brake : C.tail;
  ctx.fillRect(cx - 12 + t, by - 1, 3, 2);
  ctx.fillRect(cx + 9 + t, by - 1, 3, 2);
}

function drawHUD(ctx: CanvasRenderingContext2D, speed: number, score: number, hi: number, time: number, lap: number) {
  const mph = Math.round((speed / MAX_SPEED) * 185);
  ctx.font = 'bold 8px monospace';
  const txt = (s: string, x: number, y: number, c: string) => {
    ctx.fillStyle = 'rgba(0,0,0,0.5)'; ctx.fillText(s, x + 1, y + 1);
    ctx.fillStyle = c; ctx.fillText(s, x, y);
  };
  txt(`${mph} MPH`, W - 52, H - 4, mph > 150 ? '#ff4444' : mph > 100 ? '#ffcc00' : C.hud);
  txt(`SCORE ${score.toString().padStart(6, '0')}`, 4, 10, C.hud);
  txt(`BEST  ${hi.toString().padStart(6, '0')}`, 4, 20, '#ffcc00');
  const m = Math.floor(time / 60), s = Math.floor(time % 60);
  txt(`TIME ${m}:${s.toString().padStart(2, '0')}`, W / 2 - 22, 10, time < 15 ? '#ff4444' : C.hud);
  txt(`LAP ${lap}`, W - 34, 10, C.hud);
  // Speed bar
  const bx = W - 56, by = H - 16, bw = 52, bh = 5;
  const p = Math.min(1, speed / MAX_SPEED);
  ctx.strokeStyle = 'rgba(255,255,255,0.3)'; ctx.lineWidth = 1;
  ctx.strokeRect(bx, by, bw, bh);
  ctx.fillStyle = p > 0.85 ? '#ff4444' : p > 0.6 ? '#ffcc00' : '#44ff44';
  ctx.fillRect(bx + 1, by + 1, (bw - 2) * p, bh - 2);
}

// ─── Component ───────────────────────────────────────────────────────────────
type GS = 'menu' | 'playing' | 'over';
const T0 = 75; // initial time
const T_BONUS = 30; // time added per lap

export function OutRunGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gs, setGs] = useState<GS>('menu');
  const [score, setScore] = useState(0);
  const [hi, setHi] = useState(() => {
    try { return parseInt(localStorage.getItem('outrun_hi') ?? '0', 10); } catch { return 0; }
  });

  const gsRef = useRef<GS>('menu');
  const trackRef = useRef(buildTrack());
  const pRef = useRef({ x: 0, speed: 0, pos: 0 });
  const keysRef = useRef(new Set<string>());
  const scoreRef = useRef(0);
  const timeRef = useRef(T0);
  const lapRef = useRef(1);
  const crashRef = useRef(0);
  const prevT = useRef(0);

  const start = useCallback(() => {
    trackRef.current = buildTrack();
    pRef.current = { x: 0, speed: 0, pos: 0 };
    scoreRef.current = 0;
    timeRef.current = T0;
    lapRef.current = 1;
    crashRef.current = 0;
    prevT.current = 0;
    setScore(0);
    setGs('playing');
    gsRef.current = 'playing';
  }, []);

  useEffect(() => {
    const d = (e: KeyboardEvent) => {
      keysRef.current.add(e.key);
      if ((e.key === ' ' || e.key === 'Enter') && gsRef.current !== 'playing') start();
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) e.preventDefault();
    };
    const u = (e: KeyboardEvent) => keysRef.current.delete(e.key);
    window.addEventListener('keydown', d);
    window.addEventListener('keyup', u);
    return () => { window.removeEventListener('keydown', d); window.removeEventListener('keyup', u); };
  }, [start]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.imageSmoothingEnabled = false;
    let raf: number;

    const loop = (now: number) => {
      const state = gsRef.current;
      const p = pRef.current;
      const keys = keysRef.current;
      const { segs, npcs, len: tl } = trackRef.current;
      const segCount = segs.length;

      if (prevT.current === 0) prevT.current = now;
      const dt = Math.min(0.05, (now - prevT.current) / 1000);
      prevT.current = now;

      // ── UPDATE ──────────────────────────────────────────────────────────
      if (state === 'playing') {
        timeRef.current -= dt;
        if (timeRef.current <= 0) {
          timeRef.current = 0;
          gsRef.current = 'over';
          setGs('over');
          const s = scoreRef.current; setScore(s);
          setHi(prev => {
            const h = Math.max(prev, s);
            try { localStorage.setItem('outrun_hi', String(h)); } catch { /* */ }
            return h;
          });
        }

        if (crashRef.current > 0) {
          crashRef.current = Math.max(0, crashRef.current - dt);
          p.speed *= 0.97;
        }

        // Acceleration
        if (crashRef.current <= 0) {
          if (keys.has('ArrowUp'))         p.speed += ACCEL * dt * 60;
          else if (keys.has('ArrowDown'))  p.speed += BRAKE_F * dt * 60;
          else                             p.speed += DECEL_N * dt * 60;
        }

        const onRoad = Math.abs(p.x) <= 1.0;
        if (!onRoad) {
          p.speed += OFF_ROAD_DECEL * dt * 60;
          if (p.speed > OFF_ROAD_MAX) p.speed = OFF_ROAD_MAX;
        }
        p.speed = Math.max(0, Math.min(MAX_SPEED, p.speed));

        const spd01 = p.speed / MAX_SPEED;

        // Steering (Jake Gordon method: dx = dt * STEER_DX * spd01)
        const steerDelta = dt * STEER_DX * spd01;
        if (crashRef.current <= 0) {
          if (keys.has('ArrowLeft'))  p.x -= steerDelta;
          if (keys.has('ArrowRight')) p.x += steerDelta;
        }

        // Centrifugal force: push OUTWARD (subtract curve * factor)
        const curSeg = segs[Math.floor(p.pos / SEG_LEN) % segCount];
        p.x -= steerDelta * spd01 * curSeg.curve * CENTRIFUGAL;

        p.x = Math.max(-2.5, Math.min(2.5, p.x));

        // Move forward
        p.pos += p.speed * dt;
        if (p.pos >= tl) { p.pos -= tl; lapRef.current++; timeRef.current += T_BONUS; }

        // Move NPCs
        for (const n of npcs) {
          n.z += n.speed * dt;
          if (n.z >= tl) n.z -= tl;
        }

        // Collision
        if (crashRef.current <= 0) {
          for (const n of npcs) {
            let dz = n.z - p.pos;
            if (dz < -tl / 2) dz += tl;
            if (dz > tl / 2) dz -= tl;
            if (dz > 0 && dz < SEG_LEN * 0.7) {
              if (Math.abs(p.x - n.lane * 0.65) < 0.45) {
                p.speed *= 0.2;
                crashRef.current = 0.5;
              }
            }
          }
        }

        scoreRef.current += Math.ceil(spd01 * 3);
        if (Math.floor(now) % 150 < 20) setScore(scoreRef.current);
      }

      // ── RENDER ──────────────────────────────────────────────────────────
      const baseSI = Math.floor(p.pos / SEG_LEN) % segCount;
      const basePct = (p.pos % SEG_LEN) / SEG_LEN; // how far into current segment

      // Camera
      const camY = segs[baseSI].y + CAM_H;

      drawBG(ctx, segs[baseSI].curve * (p.speed / MAX_SPEED));

      // ── PASS 1: Road segments near → far ───────────────────────────────
      let maxY = H;
      let x = 0;
      let dx = -(segs[baseSI].curve * basePct); // interpolate into current curve

      // Store projected coords for pass 2
      interface ProjSeg {
        idx: number;
        p1x: number; p1y: number; p1w: number;
        p2x: number; p2y: number; p2w: number;
        clip: number;
      }
      const projSegs: ProjSeg[] = [];

      for (let n = 0; n < DRAW_DIST; n++) {
        const idx = (baseSI + n) % segCount;
        const seg = segs[idx];
        const nextIdx = (idx + 1) % segCount;

        // World Z (handle wrap)
        const wz1 = idx * SEG_LEN;
        const wz2 = nextIdx * SEG_LEN + (nextIdx <= idx ? tl : 0);

        // Camera X = (playerX * roadWidth) - accumulated curve offset
        const camX1 = (p.x * ROAD_W) - x;
        const camX2 = (p.x * ROAD_W) - (x + dx);

        // Project both points
        const pr1 = proj(seg.y, wz1, camX1, camY, p.pos);
        const pr2 = proj(segs[nextIdx].y, wz2, camX2, camY, p.pos);

        // Accumulate AFTER projecting
        x = x + dx;
        dx = dx + seg.curve;

        if (!pr1 || !pr2) continue;
        // Backface cull (far edge below near edge = back of hill)
        if (pr2.y >= pr1.y) continue;
        // Behind a closer hill
        if (pr2.y >= maxY) continue;

        const dy1 = Math.min(pr1.y, maxY);
        const dy2 = Math.min(pr2.y, maxY);
        if (Math.round(dy1) <= Math.round(dy2)) {
          if (pr2.y < maxY) maxY = pr2.y;
          continue;
        }

        // Alternating colours — use distance from camera for consistent stripe width
        const alt = Math.floor(n / 2) % 2 === 0;
        const gc = alt ? C.grass_l : C.grass_d;
        const rc = alt ? C.rumble_l : C.rumble_d;
        const dc = alt ? C.road_l : C.road_d;
        const lc = alt ? C.lane_m : '';

        // Grass
        ctx.fillStyle = gc;
        ctx.fillRect(0, Math.round(dy2), W, Math.round(dy1 - dy2) + 1);

        // Road
        quad(ctx, pr1.x - pr1.w, dy1, pr1.x + pr1.w, dy1,
          pr2.x + pr2.w, dy2, pr2.x - pr2.w, dy2, dc);

        // Rumble strips
        const rw1 = pr1.w * (RUMBLE_W / ROAD_W);
        const rw2 = pr2.w * (RUMBLE_W / ROAD_W);
        quad(ctx, pr1.x - pr1.w - rw1, dy1, pr1.x - pr1.w, dy1,
          pr2.x - pr2.w, dy2, pr2.x - pr2.w - rw2, dy2, rc);
        quad(ctx, pr1.x + pr1.w, dy1, pr1.x + pr1.w + rw1, dy1,
          pr2.x + pr2.w + rw2, dy2, pr2.x + pr2.w, dy2, rc);

        // Lane dashes
        if (lc) {
          const lw1 = pr1.w * 0.018, lw2 = pr2.w * 0.018;
          for (let l = 1; l < LANES; l++) {
            const lo = (l / LANES) * 2 - 1;
            const lx1 = pr1.x + lo * pr1.w;
            const lx2 = pr2.x + lo * pr2.w;
            quad(ctx, lx1 - lw1, dy1, lx1 + lw1, dy1, lx2 + lw2, dy2, lx2 - lw2, dy2, lc);
          }
        }

        // Save clip line for sprites
        seg.clip = maxY;
        if (pr2.y < maxY) maxY = pr2.y;

        projSegs.push({
          idx, p1x: pr1.x, p1y: dy1, p1w: pr1.w,
          p2x: pr2.x, p2y: dy2, p2w: pr2.w, clip: seg.clip,
        });
      }

      // ── PASS 2: Sprites & NPC cars far → near ──────────────────────────
      for (let i = projSegs.length - 1; i >= 0; i--) {
        const ps = projSegs[i];
        const seg = segs[ps.idx];

        // Roadside sprites
        for (const spr of seg.sprites) {
          const sprX = ps.p2x + spr.off * ps.p2w;
          const sprScale = ps.p2w / 90;
          drawSprite(ctx, spr.kind, sprX, ps.p2y, sprScale, ps.clip);
        }

        // NPC cars on this segment
        for (const npc of npcs) {
          const npcSI = Math.floor(npc.z / SEG_LEN) % segCount;
          if (npcSI !== ps.idx) continue;
          const t = (npc.z % SEG_LEN) / SEG_LEN; // 0..1 within segment
          // Interpolate between p1 (near) and p2 (far)
          const nx = ps.p1x + (ps.p2x - ps.p1x) * t + npc.lane * 0.6 * (ps.p1w + (ps.p2w - ps.p1w) * t);
          const ny = ps.p1y + (ps.p2y - ps.p1y) * t;
          const nw = Math.max(3, Math.round((ps.p1w + (ps.p2w - ps.p1w) * t) * 0.16));
          drawNpc(ctx, nx, ny, nw, npc.col, ps.clip);
        }
      }

      // Crash flash
      if (crashRef.current > 0 && Math.floor(crashRef.current * 20) % 2 === 0) {
        ctx.fillStyle = 'rgba(255,0,0,0.12)';
        ctx.fillRect(0, 0, W, H);
      }

      // Player car
      const steerVis = (keys.has('ArrowLeft') ? -1 : keys.has('ArrowRight') ? 1 : 0) * (p.speed / MAX_SPEED);
      drawPlayerCar(ctx, steerVis, p.speed, keys.has('ArrowDown') && p.speed > 0);

      drawHUD(ctx, p.speed, scoreRef.current, hi, timeRef.current, lapRef.current);

      // ── Overlays ──────────────────────────────────────────────────────
      if (state === 'menu') {
        ctx.fillStyle = 'rgba(0,0,0,0.6)';
        ctx.fillRect(0, 0, W, H);
        ctx.textAlign = 'center';
        ctx.font = 'bold 16px monospace';
        ctx.fillStyle = '#ff4444';
        ctx.fillText('OUT RUN', W / 2, 55);
        ctx.font = 'bold 10px monospace';
        ctx.fillStyle = '#ffcc00';
        ctx.fillText('JRHODES EDITION', W / 2, 73);
        ctx.font = '8px monospace';
        ctx.fillStyle = '#fff';
        ctx.fillText('↑ GAS   ↓ BRAKE', W / 2, 105);
        ctx.fillText('← → STEER', W / 2, 117);
        ctx.fillStyle = '#aaa';
        ctx.fillText('BEAT THE CLOCK', W / 2, 140);
        ctx.fillText('DODGE TRAFFIC FOR POINTS', W / 2, 152);
        ctx.font = 'bold 9px monospace';
        ctx.fillStyle = Math.floor(now / 500) % 2 === 0 ? '#ffcc00' : '#fff';
        ctx.fillText('[ SPACE / ENTER TO RACE ]', W / 2, 190);
        if (hi > 0) {
          ctx.font = '7px monospace'; ctx.fillStyle = '#ffcc00';
          ctx.fillText(`BEST: ${hi.toString().padStart(6, '0')}`, W / 2, 210);
        }
        ctx.textAlign = 'left';
      }

      if (state === 'over') {
        ctx.fillStyle = 'rgba(0,0,0,0.7)';
        ctx.fillRect(0, 0, W, H);
        ctx.textAlign = 'center';
        ctx.font = 'bold 12px monospace';
        ctx.fillStyle = '#ff4444';
        ctx.fillText('TIME UP!', W / 2, H / 2 - 30);
        ctx.font = '9px monospace';
        ctx.fillStyle = '#fff';
        ctx.fillText(`SCORE: ${scoreRef.current.toString().padStart(6, '0')}`, W / 2, H / 2 - 5);
        ctx.fillStyle = '#ffcc00';
        ctx.fillText(`BEST:  ${hi.toString().padStart(6, '0')}`, W / 2, H / 2 + 10);
        ctx.fillText(`LAPS:  ${lapRef.current}`, W / 2, H / 2 + 25);
        ctx.font = 'bold 8px monospace';
        ctx.fillStyle = Math.floor(now / 500) % 2 === 0 ? '#ffcc00' : '#fff';
        ctx.fillText('[ SPACE / ENTER TO RETRY ]', W / 2, H / 2 + 55);
        ctx.textAlign = 'left';
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [hi]);

  return (
    <section className="game-section" id="game">
      <div className="game-section__inner">
        <div className="game-section__header">
          <h2 className="section-label">// arcade</h2>
          <h3 className="game-title">
            <span>Out Run</span> — jrhodes edition
          </h3>
          <p className="game-subtitle">
            Hit the gas. Dodge traffic. Beat the clock. A love letter to 1986.
          </p>
        </div>
        <div className="game-wrapper">
          <canvas
            ref={canvasRef}
            width={W}
            height={H}
            className="game-canvas"
            onClick={() => { if (gs !== 'playing') start(); }}
          />
          <div className="game-controls-hint">
            <span>↑ Gas</span>
            <span>↓ Brake</span>
            <span>← → Steer</span>
            <span>Space / Enter to start</span>
          </div>
        </div>
        <div className="game-section__score">
          {gs === 'playing' && (
            <div className="live-score">Score: <strong>{score.toLocaleString()}</strong></div>
          )}
          {hi > 0 && (
            <div className="hi-score">Best: <strong>{hi.toLocaleString()}</strong></div>
          )}
        </div>
      </div>
    </section>
  );
}

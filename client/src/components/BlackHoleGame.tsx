import { useCallback, useEffect, useRef, useState } from 'react';

// ─── Canvas resolution (pixel-art low-res, scaled up via CSS) ────────────────
const W = 320;
const H = 240;

// ─── Physics constants ────────────────────────────────────────────────────────
const BH_X = W / 2;       // black hole center x
const BH_Y = H / 2;       // black hole center y
const G = 800;             // gravitational parameter (tuned for fun)
const EVENT_HORIZON = 13;  // px — closer than this = sucked in
const ESCAPE_R = 143;      // px — farther than this = escaped
const THRUST = 0.09;       // px/frame² acceleration
const ROT_SPEED = 3.5;     // degrees/frame rotation

// Circular orbit velocity at radius r: v = sqrt(G / r)
const orbitalV = (r: number) => Math.sqrt(G / r);

// Starting orbit radius and velocity
const INIT_R = 68;
const INIT_V = orbitalV(INIT_R);

// Speed display scaling: 1 px/frame = 8500 km/s (fictional but plausible)
const KMS_PER_PXF = 8500;
const C_KMS = 299792;

// ─── Pixel-art colour palette ─────────────────────────────────────────────────
const COL = {
  bg:          '#04040e',
  star1:       '#ffffff',
  star2:       '#aabbff',
  star3:       '#ffddaa',
  diskOuter:   '#3d0a66',
  diskMid:     '#7b1fa2',
  diskInner:   '#e040fb',
  diskHot:     '#ff6090',
  diskCore:    '#ffcdd2',
  bhBlack:     '#000000',
  photonRing:  '#b0bec5',
  shipBody:    '#cfd8dc',
  shipCockpit: '#00e5ff',
  shipWing:    '#90a4ae',
  thruster:    '#ff6d00',
  thruster2:   '#ffff00',
  hud:         '#00e5ff',
  hudWarn:     '#ff6d00',
  hudDanger:   '#ff1744',
  hudGood:     '#00e676',
  particle:    '#ff6d00',
  particleAlt: '#ffff00',
  explode1:    '#ff1744',
  explode2:    '#ff9100',
  explode3:    '#ffff00',
};

// ─── Static starfield (seeded so it's stable between frames) ─────────────────
function makeStars(count: number) {
  const stars: { x: number; y: number; col: string; size: number }[] = [];
  // simple LCG for deterministic layout
  let seed = 42;
  const rand = () => { seed = (seed * 1664525 + 1013904223) & 0xffffffff; return (seed >>> 0) / 0xffffffff; };
  const colours = [COL.star1, COL.star2, COL.star3];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.floor(rand() * W),
      y: Math.floor(rand() * H),
      col: colours[Math.floor(rand() * colours.length)],
      size: rand() < 0.15 ? 2 : 1,
    });
  }
  return stars;
}
const STARS = makeStars(120);

// ─── Ship sprite (facing right = angle 0) ────────────────────────────────────
// 0=transparent, 1=body, 2=cockpit, 3=wing, 4=thruster
const SHIP_PIX: number[][] = [
  [0,0,0,2,0,0,0,0,0],
  [0,0,1,2,1,0,0,0,0],
  [3,1,1,2,1,1,1,0,0],
  [0,0,1,1,1,0,0,0,0],
  [0,0,0,1,0,0,0,0,0],
];
const SHIP_W = SHIP_PIX[0].length;
const SHIP_H = SHIP_PIX.length;

function drawShip(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  angleDeg: number,
  thrusting: boolean,
  braking: boolean,
) {
  ctx.save();
  ctx.translate(Math.round(x), Math.round(y));
  ctx.rotate((angleDeg * Math.PI) / 180);
  const ox = Math.floor(SHIP_W / 2);
  const oy = Math.floor(SHIP_H / 2);
  for (let row = 0; row < SHIP_H; row++) {
    for (let col = 0; col < SHIP_W; col++) {
      const v = SHIP_PIX[row][col];
      if (v === 0) continue;
      let colour = '';
      if (v === 1) colour = COL.shipBody;
      else if (v === 2) colour = COL.shipCockpit;
      else if (v === 3) colour = (thrusting || braking) ? COL.thruster : COL.shipWing;
      else colour = COL.shipWing;
      ctx.fillStyle = colour;
      ctx.fillRect(col - ox, row - oy, 1, 1);
    }
  }
  // Thruster flame (only when thrusting forward)
  if (thrusting) {
    ctx.fillStyle = COL.thruster;
    ctx.fillRect(-ox - 2, -1, 2, 1);
    ctx.fillStyle = COL.thruster2;
    ctx.fillRect(-ox - 1, 0, 1, 1);
  }
  ctx.restore();
}

// ─── Draw the black hole ─────────────────────────────────────────────────────
function drawBlackHole(ctx: CanvasRenderingContext2D, t: number) {
  // Accretion disk rings (animated, slightly rotating)
  const diskRings = [
    { r: EVENT_HORIZON + 28, rx: 38, ry: 7, col: COL.diskOuter,  lw: 3 },
    { r: EVENT_HORIZON + 18, rx: 28, ry: 5, col: COL.diskMid,    lw: 2 },
    { r: EVENT_HORIZON + 10, rx: 20, ry: 4, col: COL.diskInner,  lw: 2 },
    { r: EVENT_HORIZON + 5,  rx: 15, ry: 3, col: COL.diskHot,    lw: 1 },
    { r: EVENT_HORIZON + 2,  rx: 12, ry: 2, col: COL.diskCore,   lw: 1 },
  ];
  const rot = t * 0.3 * (Math.PI / 180);
  for (const d of diskRings) {
    ctx.save();
    ctx.translate(BH_X, BH_Y);
    ctx.rotate(rot);
    ctx.strokeStyle = d.col;
    ctx.lineWidth = d.lw;
    ctx.globalAlpha = 0.75;
    ctx.beginPath();
    ctx.ellipse(0, 0, d.rx, d.ry, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }
  // Photon ring (faint glow just outside event horizon)
  ctx.globalAlpha = 0.4;
  ctx.strokeStyle = COL.photonRing;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(BH_X, BH_Y, EVENT_HORIZON + 1, 0, Math.PI * 2);
  ctx.stroke();
  ctx.globalAlpha = 1;
  // Black hole centre (the singularity / event horizon)
  ctx.fillStyle = COL.bhBlack;
  ctx.beginPath();
  ctx.arc(BH_X, BH_Y, EVENT_HORIZON, 0, Math.PI * 2);
  ctx.fill();
}

// ─── Particles ────────────────────────────────────────────────────────────────
interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  life: number; maxLife: number;
  col: string;
  size: number;
}

function spawnExplosion(x: number, y: number): Particle[] {
  const p: Particle[] = [];
  const cols = [COL.explode1, COL.explode2, COL.explode3, COL.shipBody];
  for (let i = 0; i < 40; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 0.5 + Math.random() * 3;
    p.push({
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 40 + Math.floor(Math.random() * 30),
      maxLife: 70,
      col: cols[Math.floor(Math.random() * cols.length)],
      size: Math.random() < 0.3 ? 2 : 1,
    });
  }
  return p;
}

function spawnThrusterParticle(x: number, y: number, angleDeg: number): Particle {
  const back = ((angleDeg + 180) * Math.PI) / 180;
  const spread = ((Math.random() - 0.5) * 30 * Math.PI) / 180;
  const speed = 0.8 + Math.random() * 1.2;
  return {
    x, y,
    vx: Math.cos(back + spread) * speed,
    vy: Math.sin(back + spread) * speed,
    life: 8 + Math.floor(Math.random() * 8),
    maxLife: 16,
    col: Math.random() < 0.5 ? COL.thruster : COL.thruster2,
    size: 1,
  };
}

// ─── HUD helpers ─────────────────────────────────────────────────────────────
function pixelText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  col: string,
  size = 1,
) {
  ctx.fillStyle = col;
  ctx.font = `${size * 6}px monospace`;
  ctx.fillText(text, x, y + size * 6);
}

function drawHUD(
  ctx: CanvasRenderingContext2D,
  score: number,
  hiScore: number,
  speed: number,
  r: number,
  thrust: number,
) {
  const kmS = speed * KMS_PER_PXF;
  const pctC = (kmS / C_KMS) * 100;
  const alt = Math.max(0, Math.round((r - EVENT_HORIZON) * 14.7));
  const danger = r < EVENT_HORIZON + 10;
  const escaping = r > ESCAPE_R - 20;
  const hudCol = danger ? COL.hudDanger : escaping ? COL.hudWarn : COL.hud;

  // Semi-transparent HUD panel
  ctx.fillStyle = 'rgba(0,0,0,0.55)';
  ctx.fillRect(2, 2, 135, 52);
  ctx.fillRect(2, H - 14, W - 4, 12);

  pixelText(ctx, `SCORE  ${score.toString().padStart(7,'0')}`, 4, 2, hudCol);
  pixelText(ctx, `BEST   ${hiScore.toString().padStart(7,'0')}`, 4, 12, COL.hud);
  pixelText(ctx, `ALT    ${alt} km`, 4, 22, hudCol);
  pixelText(ctx, `SPEED  ${pctC.toFixed(4)}% c`, 4, 32, hudCol);
  pixelText(ctx, `THRUST ${thrust >= 0 ? '+' : ''}${thrust.toFixed(2)}`, 4, 42, hudCol);

  // Bottom bar: orbit status
  const orbFrac = Math.max(0, Math.min(1, 1 - (r - EVENT_HORIZON) / (ESCAPE_R - EVENT_HORIZON)));
  const barW = Math.floor((W - 8) * orbFrac);
  const barCol = orbFrac > 0.7 ? COL.hudDanger : orbFrac > 0.4 ? COL.hudWarn : COL.hudGood;
  ctx.fillStyle = barCol;
  ctx.fillRect(4, H - 12, barW, 8);
  ctx.strokeStyle = COL.hud;
  ctx.lineWidth = 1;
  ctx.strokeRect(4, H - 12, W - 8, 8);
  pixelText(ctx, 'PROXIMITY', Math.floor(W / 2) - 22, H - 14, 'rgba(0,0,0,0.8)');
}

// ─── Main component ───────────────────────────────────────────────────────────
type GameState = 'menu' | 'playing' | 'sucked_in' | 'escaped';

export function BlackHoleGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<GameState>('menu');
  const [score, setScore] = useState(0);
  const [hiScore, setHiScore] = useState(() => {
    try { return parseInt(localStorage.getItem('bhg_hi') ?? '0', 10); } catch { return 0; }
  });
  const [deathMsg, setDeathMsg] = useState('');

  // Mutable game state held in refs (no re-render on every frame)
  const stateRef = useRef<GameState>('menu');
  const shipRef = useRef({
    x: BH_X, y: BH_Y - INIT_R,
    vx: INIT_V, vy: 0,
    angle: 0, // degrees, 0 = facing right
    thrust: 0,
  });
  const keysRef = useRef(new Set<string>());
  const particlesRef = useRef<Particle[]>([]);
  const tickRef = useRef(0);
  const frameRef = useRef(0);
  const scoreRef = useRef(0);

  const startGame = useCallback(() => {
    shipRef.current = {
      x: BH_X,
      y: BH_Y - INIT_R,
      vx: INIT_V,
      vy: 0,
      angle: 0,
      thrust: 0,
    };
    particlesRef.current = [];
    tickRef.current = 0;
    scoreRef.current = 0;
    setScore(0);
    setGameState('playing');
    stateRef.current = 'playing';
  }, []);

  // Key handlers
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      keysRef.current.add(e.key);
      if (e.key === ' ' || e.key === 'Enter') {
        if (stateRef.current !== 'playing') startGame();
      }
      // Prevent page scroll
      if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight',' '].includes(e.key)) {
        e.preventDefault();
      }
    };
    const up = (e: KeyboardEvent) => keysRef.current.delete(e.key);
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    return () => { window.removeEventListener('keydown', down); window.removeEventListener('keyup', up); };
  }, [startGame]);

  // Game loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.imageSmoothingEnabled = false;

    let rafId: number;

    const loop = () => {
      const state = stateRef.current;
      const ship = shipRef.current;
      const keys = keysRef.current;
      const particles = particlesRef.current;
      const t = (tickRef.current += 1);

      // ── Input ──────────────────────────────────────────────────────────────
      if (state === 'playing') {
        if (keys.has('ArrowLeft'))  ship.angle -= ROT_SPEED;
        if (keys.has('ArrowRight')) ship.angle += ROT_SPEED;

        let thrusting = false;
        let braking   = false;
        if (keys.has('ArrowUp')) {
          const rad = (ship.angle * Math.PI) / 180;
          ship.vx += Math.cos(rad) * THRUST;
          ship.vy += Math.sin(rad) * THRUST;
          thrusting = true;
          if (t % 2 === 0) particles.push(spawnThrusterParticle(ship.x, ship.y, ship.angle));
        }
        if (keys.has('ArrowDown')) {
          const rad = ((ship.angle + 180) * Math.PI) / 180;
          ship.vx += Math.cos(rad) * THRUST;
          ship.vy += Math.sin(rad) * THRUST;
          braking = true;
        }
        ship.thrust = thrusting ? THRUST : braking ? -THRUST : 0;

        // ── Gravity ────────────────────────────────────────────────────────
        const dx = ship.x - BH_X;
        const dy = ship.y - BH_Y;
        const rSq = dx * dx + dy * dy;
        const r   = Math.sqrt(rSq);
        const ax  = -(G * dx) / (rSq * r);
        const ay  = -(G * dy) / (rSq * r);
        ship.vx += ax;
        ship.vy += ay;
        ship.x  += ship.vx;
        ship.y  += ship.vy;

        // ── Scoring ────────────────────────────────────────────────────────
        const proximity = Math.max(0, 1 - (r - EVENT_HORIZON) / (ESCAPE_R - EVENT_HORIZON));
        const bonus = Math.ceil(proximity * 12);
        scoreRef.current += 1 + bonus;
        if (t % 10 === 0) setScore(scoreRef.current);

        // ── Win/Loss check ────────────────────────────────────────────────
        if (r <= EVENT_HORIZON) {
          particlesRef.current = spawnExplosion(ship.x, ship.y);
          stateRef.current = 'sucked_in';
          setGameState('sucked_in');
          setDeathMsg('ABSORBED BY THE SINGULARITY');
          const s = scoreRef.current;
          setScore(s);
          setHiScore(prev => {
            const hi = Math.max(prev, s);
            try { localStorage.setItem('bhg_hi', String(hi)); } catch {}
            return hi;
          });
          // Auto-return to menu after 3s
          setTimeout(() => { stateRef.current = 'menu'; setGameState('menu'); }, 3000);
        } else if (r >= ESCAPE_R) {
          stateRef.current = 'escaped';
          setGameState('escaped');
          setDeathMsg('ESCAPE VELOCITY REACHED — LOST IN SPACE');
          const s = scoreRef.current;
          setScore(s);
          setHiScore(prev => {
            const hi = Math.max(prev, s);
            try { localStorage.setItem('bhg_hi', String(hi)); } catch {}
            return hi;
          });
          setTimeout(() => { stateRef.current = 'menu'; setGameState('menu'); }, 3000);
        }
      }

      // ── Update particles ────────────────────────────────────────────────────
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        p.vy += 0.05; // mild "screen gravity" for visual interest
        p.life--;
      }
      particlesRef.current = particles.filter(p => p.life > 0);

      // ── Render ──────────────────────────────────────────────────────────────
      ctx.fillStyle = COL.bg;
      ctx.fillRect(0, 0, W, H);

      // Stars
      for (const s of STARS) {
        ctx.fillStyle = s.col;
        ctx.fillRect(s.x, s.y, s.size, s.size);
      }

      // Black hole
      drawBlackHole(ctx, t);

      // Particles
      for (const p of particles) {
        ctx.globalAlpha = p.life / p.maxLife;
        ctx.fillStyle = p.col;
        ctx.fillRect(Math.round(p.x), Math.round(p.y), p.size, p.size);
      }
      ctx.globalAlpha = 1;

      // Ship (only when playing or just died — hide when totally gone)
      if (state === 'playing') {
        const ship2 = shipRef.current;
        const spd  = Math.sqrt(ship2.vx ** 2 + ship2.vy ** 2);
        const dx2  = ship2.x - BH_X;
        const dy2  = ship2.y - BH_Y;
        const r2   = Math.sqrt(dx2 ** 2 + dy2 ** 2);
        const thrusting = keys.has('ArrowUp');
        const braking   = keys.has('ArrowDown');
        drawShip(ctx, ship2.x, ship2.y, ship2.angle, thrusting, braking);
        drawHUD(ctx, scoreRef.current, hiScore, spd, r2, ship2.thrust);
      }

      // ── Menu / death overlays ───────────────────────────────────────────────
      if (state === 'menu') {
        ctx.fillStyle = 'rgba(0,0,0,0.7)';
        ctx.fillRect(0, 0, W, H);
        ctx.fillStyle = '#00e5ff';
        ctx.font = 'bold 11px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('CAN YOU ORBIT A', W / 2, 70);
        ctx.font = 'bold 14px monospace';
        ctx.fillStyle = '#e040fb';
        ctx.fillText('BLACK HOLE?', W / 2, 88);
        ctx.font = '8px monospace';
        ctx.fillStyle = '#b0bec5';
        ctx.fillText('↑ THRUST   ↓ BRAKE', W / 2, 115);
        ctx.fillText('← → ROTATE SHIP', W / 2, 126);
        ctx.fillStyle = '#ffff00';
        ctx.fillText('ORBIT CLOSE FOR MAX SCORE', W / 2, 145);
        ctx.fillStyle = '#ff6d00';
        ctx.fillText('TOO CLOSE = ABSORBED', W / 2, 157);
        ctx.fillText('TOO FAR = LOST IN SPACE', W / 2, 168);
        ctx.font = 'bold 9px monospace';
        ctx.fillStyle = t % 60 < 30 ? '#00e5ff' : '#ffffff';
        ctx.fillText('[ SPACE / ENTER TO LAUNCH ]', W / 2, 195);
        if (hiScore > 0) {
          ctx.font = '7px monospace';
          ctx.fillStyle = '#ffd740';
          ctx.fillText(`BEST: ${hiScore.toString().padStart(7,'0')}`, W / 2, 210);
        }
        ctx.textAlign = 'left';
      }

      if (state === 'sucked_in' || state === 'escaped') {
        ctx.fillStyle = 'rgba(0,0,0,0.72)';
        ctx.fillRect(0, 0, W, H);
        ctx.textAlign = 'center';
        ctx.font = 'bold 10px monospace';
        ctx.fillStyle = state === 'sucked_in' ? '#ff1744' : '#ff9100';
        ctx.fillText(deathMsg, W / 2, H / 2 - 20);
        ctx.font = '8px monospace';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`SCORE: ${scoreRef.current.toString().padStart(7, '0')}`, W / 2, H / 2);
        ctx.fillStyle = '#ffd740';
        ctx.fillText(`BEST:  ${hiScore.toString().padStart(7, '0')}`, W / 2, H / 2 + 12);
        ctx.font = '7px monospace';
        ctx.fillStyle = '#b0bec5';
        ctx.fillText('returning to menu...', W / 2, H / 2 + 30);
        ctx.textAlign = 'left';
      }

      frameRef.current = rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [hiScore, deathMsg]);

  return (
    <section className="game-section" id="game">
      <div className="game-section__inner">
        <div className="game-section__header">
          <h2 className="section-label">// mini game</h2>
          <h3 className="game-title">
            Can You <span>Orbit</span> a Black Hole?
          </h3>
          <p className="game-subtitle">
            Harness gravity. Don&apos;t get absorbed. Score points by flying dangerously close.
          </p>
        </div>
        <div className="game-wrapper">
          <canvas
            ref={canvasRef}
            width={W}
            height={H}
            className="game-canvas"
            onClick={() => { if (gameState !== 'playing') startGame(); }}
          />
          <div className="game-controls-hint">
            <span>↑ Thrust</span>
            <span>↓ Brake</span>
            <span>← → Rotate</span>
            <span>Space / Enter to start</span>
          </div>
        </div>
        <div className="game-section__score">
          {gameState === 'playing' && (
            <div className="live-score">
              Score: <strong>{score.toLocaleString()}</strong>
            </div>
          )}
          {hiScore > 0 && (
            <div className="hi-score">
              Best: <strong>{hiScore.toLocaleString()}</strong>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

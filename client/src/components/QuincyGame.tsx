import { useCallback, useEffect, useRef, useState } from 'react';

const W = 400;
const H = 280;

// ─── Colours ─────────────────────────────────────────────────────────────────
const COL = {
  // Room
  wall:       '#e8ddd0',
  wallTrim:   '#c4b5a0',
  floor:      '#b08860',
  floorLine:  '#9a7650',
  baseboard:  '#f0ebe4',
  rug:        '#8b3a3a',
  rugBorder:  '#6b2a2a',
  rugFringe:  '#c4a060',
  window:     '#b8d8f0',
  windowFrame:'#f0ebe4',
  windowSill: '#d8cfc4',
  curtain:    '#c06040',
  plantPot:   '#cc8855',
  plantLeaf:  '#4a8844',
  // Bed
  bedBase:    '#6b88a0',
  bedInner:   '#8ba8c0',
  bedRim:     '#5a7890',
  // Dog body
  dogBlack:   '#1a1a1a',
  dogDark:    '#2a2a2a',
  dogWhite:   '#f0ece8',
  dogBelly:   '#e8e0d8',
  dogNose:    '#111111',
  dogEyeW:    '#ffffff',
  dogEyeP:    '#332200',
  dogTongue:  '#e85070',
  dogCollar:  '#cc3030',
  dogTag:     '#ffd700',
  // Ball
  kong:       '#e85500',
  kongHi:     '#ff7722',
  kongSh:     '#c04400',
  // Text
  hud:        '#ffffff',
  hudShadow:  'rgba(0,0,0,0.4)',
};

// ─── Seeded random ───────────────────────────────────────────────────────────
let _seed = Date.now();
function rand() { _seed = (_seed * 1664525 + 1013904223) & 0xffffffff; return (_seed >>> 0) / 0xffffffff; }

function pick<T>(arr: T[]) { return arr[Math.floor(rand() * arr.length)]; }

// ─── Trick types ─────────────────────────────────────────────────────────────
const TRICKS = ['backflip', 'frontflip', 'spin', 'jump', 'roll', 'wiggle'] as const;
type Trick = typeof TRICKS[number];

const TRICK_LABELS: Record<Trick, string> = {
  backflip: 'BACKFLIP!',
  frontflip: 'FRONT FLIP!',
  spin: 'BARREL ROLL!',
  jump: 'BIG LEAP!',
  roll: 'LOG ROLL!',
  wiggle: 'WIGGLE CATCH!',
};

const TRICK_POINTS: Record<Trick, number> = {
  backflip: 300,
  frontflip: 250,
  spin: 200,
  jump: 100,
  roll: 350,
  wiggle: 150,
};

// ─── Game state ──────────────────────────────────────────────────────────────
type Phase = 'sleeping' | 'aiming' | 'throwing' | 'catching' | 'celebrating';

interface Ball {
  x: number; y: number;
  vx: number; vy: number;
  targetX: number; targetY: number;
  progress: number; // 0..1 for throw arc
}

interface DogState {
  x: number; y: number;
  phase: Phase;
  trick: Trick;
  trickTimer: number;    // 0..1 animation progress
  eyesOpen: boolean;
  tailWag: number;
  mouthOpen: boolean;
  rotation: number;      // degrees for flips/spins
  jumpY: number;         // vertical offset during jump
  hasBall: boolean;
  zzz: number;           // sleep z animation
}

// ─── Draw room ───────────────────────────────────────────────────────────────
function drawRoom(ctx: CanvasRenderingContext2D) {
  // Wall
  ctx.fillStyle = COL.wall;
  ctx.fillRect(0, 0, W, 190);

  // Baseboard
  ctx.fillStyle = COL.baseboard;
  ctx.fillRect(0, 178, W, 14);
  ctx.fillStyle = COL.wallTrim;
  ctx.fillRect(0, 178, W, 2);

  // Floor
  ctx.fillStyle = COL.floor;
  ctx.fillRect(0, 192, W, H - 192);

  // Floor planks
  ctx.strokeStyle = COL.floorLine;
  ctx.lineWidth = 1;
  for (let y = 200; y < H; y += 18) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  }
  for (let x = 30; x < W; x += 80) {
    ctx.beginPath(); ctx.moveTo(x, 192); ctx.lineTo(x, H); ctx.stroke();
  }

  // Rug
  ctx.fillStyle = COL.rugBorder;
  roundRect(ctx, 60, 215, 280, 55, 4);
  ctx.fillStyle = COL.rug;
  roundRect(ctx, 65, 218, 270, 49, 3);
  // Rug pattern — simple diamond
  ctx.strokeStyle = COL.rugFringe;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(200, 222); ctx.lineTo(230, 242); ctx.lineTo(200, 262); ctx.lineTo(170, 242);
  ctx.closePath(); ctx.stroke();

  // Window
  ctx.fillStyle = COL.windowFrame;
  ctx.fillRect(230, 20, 90, 100);
  ctx.fillStyle = COL.window;
  ctx.fillRect(236, 26, 36, 42);
  ctx.fillRect(278, 26, 36, 42);
  ctx.fillRect(236, 74, 36, 40);
  ctx.fillRect(278, 74, 36, 40);
  // Cross
  ctx.fillStyle = COL.windowFrame;
  ctx.fillRect(272, 26, 6, 88);
  ctx.fillRect(236, 68, 78, 6);
  // Sill
  ctx.fillStyle = COL.windowSill;
  ctx.fillRect(225, 118, 100, 8);

  // Curtains
  ctx.fillStyle = COL.curtain;
  ctx.fillRect(218, 14, 14, 112);
  ctx.fillRect(318, 14, 14, 112);
  // Curtain rod
  ctx.fillStyle = COL.wallTrim;
  ctx.fillRect(212, 12, 126, 4);

  // Plant in corner
  ctx.fillStyle = COL.plantPot;
  ctx.beginPath();
  ctx.moveTo(355, 192); ctx.lineTo(350, 160); ctx.lineTo(380, 160); ctx.lineTo(375, 192);
  ctx.closePath(); ctx.fill();
  ctx.fillStyle = COL.plantLeaf;
  drawLeaf(ctx, 365, 155, -30, 25);
  drawLeaf(ctx, 365, 150, 20, 28);
  drawLeaf(ctx, 365, 158, -60, 20);
  drawLeaf(ctx, 365, 148, 50, 22);
  drawLeaf(ctx, 365, 152, 0, 30);
}

function drawLeaf(ctx: CanvasRenderingContext2D, x: number, y: number, angleDeg: number, len: number) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate((angleDeg * Math.PI) / 180);
  ctx.beginPath();
  ctx.ellipse(0, -len / 2, 5, len / 2, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y); ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r); ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h); ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r); ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath(); ctx.fill();
}

// ─── Draw dog bed ────────────────────────────────────────────────────────────
function drawBed(ctx: CanvasRenderingContext2D) {
  // Bed sits on the rug
  ctx.fillStyle = COL.bedRim;
  roundRect(ctx, 90, 228, 80, 32, 8);
  ctx.fillStyle = COL.bedBase;
  roundRect(ctx, 93, 230, 74, 28, 6);
  ctx.fillStyle = COL.bedInner;
  roundRect(ctx, 97, 233, 66, 22, 5);
}

// ─── Draw Quincy ─────────────────────────────────────────────────────────────
function drawDog(ctx: CanvasRenderingContext2D, dog: DogState, time: number) {
  ctx.save();
  ctx.translate(dog.x, dog.y - dog.jumpY);
  ctx.rotate((dog.rotation * Math.PI) / 180);

  const wag = Math.sin(time * (dog.phase === 'celebrating' ? 25 : dog.phase === 'sleeping' ? 2 : 8)) * (dog.phase === 'celebrating' ? 15 : 5);

  // Tail (behind body)
  ctx.save();
  ctx.translate(18, -4);
  ctx.rotate(((wag + 20) * Math.PI) / 180);
  ctx.fillStyle = COL.dogBlack;
  ctx.beginPath();
  ctx.ellipse(0, -10, 3, 12, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Back legs (behind)
  ctx.fillStyle = COL.dogBlack;
  ctx.fillRect(10, 4, 7, 14);
  ctx.fillRect(-12, 4, 7, 14);
  // White toes
  ctx.fillStyle = COL.dogWhite;
  ctx.fillRect(10, 15, 7, 4);
  ctx.fillRect(-12, 15, 7, 4);

  // Body
  ctx.fillStyle = COL.dogBlack;
  ctx.beginPath();
  ctx.ellipse(0, -2, 20, 14, 0, 0, Math.PI * 2);
  ctx.fill();

  // White belly/chest
  ctx.fillStyle = COL.dogBelly;
  ctx.beginPath();
  ctx.ellipse(-4, 6, 14, 8, -0.15, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = COL.dogWhite;
  ctx.beginPath();
  ctx.ellipse(-14, -2, 8, 10, -0.2, 0, Math.PI * 2);
  ctx.fill();

  // Front legs
  ctx.fillStyle = COL.dogBlack;
  ctx.fillRect(-16, 4, 6, 14);
  ctx.fillRect(4, 4, 6, 14);
  // White toes
  ctx.fillStyle = COL.dogWhite;
  ctx.fillRect(-16, 15, 6, 4);
  ctx.fillRect(4, 15, 6, 4);

  // Head
  ctx.fillStyle = COL.dogBlack;
  ctx.beginPath();
  ctx.ellipse(-18, -10, 12, 11, -0.1, 0, Math.PI * 2);
  ctx.fill();

  // White muzzle
  ctx.fillStyle = COL.dogWhite;
  ctx.beginPath();
  ctx.ellipse(-26, -6, 6, 5, -0.2, 0, Math.PI * 2);
  ctx.fill();

  // Ears
  ctx.fillStyle = COL.dogDark;
  ctx.beginPath();
  ctx.ellipse(-24, -20, 5, 8, -0.4, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(-12, -20, 5, 8, 0.4, 0, Math.PI * 2);
  ctx.fill();

  // Eyes
  if (dog.eyesOpen) {
    ctx.fillStyle = COL.dogEyeW;
    ctx.beginPath(); ctx.arc(-22, -12, 3.5, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(-15, -12, 3.5, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = COL.dogEyeP;
    ctx.beginPath(); ctx.arc(-22, -12, 2, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(-15, -12, 2, 0, Math.PI * 2); ctx.fill();
    // Highlights
    ctx.fillStyle = '#ffffff';
    ctx.beginPath(); ctx.arc(-23, -13, 1, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(-16, -13, 1, 0, Math.PI * 2); ctx.fill();
  } else {
    // Closed eyes (sleeping)
    ctx.strokeStyle = COL.dogWhite;
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(-25, -12); ctx.lineTo(-19, -12); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(-18, -12); ctx.lineTo(-12, -12); ctx.stroke();
  }

  // Nose
  ctx.fillStyle = COL.dogNose;
  ctx.beginPath();
  ctx.ellipse(-30, -8, 3, 2.5, 0, 0, Math.PI * 2);
  ctx.fill();

  // Mouth / tongue
  if (dog.mouthOpen) {
    ctx.fillStyle = COL.dogTongue;
    ctx.beginPath();
    ctx.ellipse(-28, -3, 3, 5 + Math.sin(time * 6) * 1.5, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  // Collar
  ctx.fillStyle = COL.dogCollar;
  ctx.beginPath();
  ctx.ellipse(-10, -2, 13, 3, 0, 0, Math.PI);
  ctx.fill();
  // Tag
  ctx.fillStyle = COL.dogTag;
  ctx.beginPath(); ctx.arc(-10, 2, 3, 0, Math.PI * 2); ctx.fill();

  // Ball in mouth if caught
  if (dog.hasBall) {
    drawBall(ctx, -30, -6, 5);
  }

  ctx.restore();

  // Zzz bubbles when sleeping
  if (dog.phase === 'sleeping') {
    const t = time * 0.8;
    const zzOff = (t % 3);
    ctx.font = `${10 + zzOff * 3}px serif`;
    ctx.fillStyle = `rgba(100,100,150,${0.7 - zzOff * 0.2})`;
    ctx.fillText('z', dog.x - 38 - zzOff * 6, dog.y - 30 - zzOff * 14);
    const zzOff2 = ((t + 1.5) % 3);
    ctx.font = `${8 + zzOff2 * 2}px serif`;
    ctx.fillStyle = `rgba(100,100,150,${0.6 - zzOff2 * 0.2})`;
    ctx.fillText('z', dog.x - 30 - zzOff2 * 8, dog.y - 26 - zzOff2 * 12);
  }
}

// ─── Draw ball ───────────────────────────────────────────────────────────────
function drawBall(ctx: CanvasRenderingContext2D, x: number, y: number, r: number) {
  // Kong ball — orange with ridges
  ctx.fillStyle = COL.kong;
  ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
  // Highlight
  ctx.fillStyle = COL.kongHi;
  ctx.beginPath(); ctx.arc(x - r * 0.25, y - r * 0.25, r * 0.5, 0, Math.PI * 2); ctx.fill();
  // Ridge lines
  ctx.strokeStyle = COL.kongSh;
  ctx.lineWidth = 0.8;
  ctx.beginPath(); ctx.arc(x, y, r * 0.65, -0.3, 1.2); ctx.stroke();
  ctx.beginPath(); ctx.arc(x, y, r * 0.65, 2, 3.5); ctx.stroke();
}

// ─── Draw crosshair ─────────────────────────────────────────────────────────
function drawCrosshair(ctx: CanvasRenderingContext2D, mx: number, my: number) {
  ctx.strokeStyle = 'rgba(232,85,0,0.7)';
  ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.arc(mx, my, 12, 0, Math.PI * 2); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(mx - 16, my); ctx.lineTo(mx - 8, my); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(mx + 8, my); ctx.lineTo(mx + 16, my); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(mx, my - 16); ctx.lineTo(mx, my - 8); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(mx, my + 8); ctx.lineTo(mx, my + 16); ctx.stroke();
}

// ─── Easing ──────────────────────────────────────────────────────────────────
function easeOutBounce(t: number): number {
  if (t < 1 / 2.75) return 7.5625 * t * t;
  if (t < 2 / 2.75) { const t2 = t - 1.5 / 2.75; return 7.5625 * t2 * t2 + 0.75; }
  if (t < 2.5 / 2.75) { const t2 = t - 2.25 / 2.75; return 7.5625 * t2 * t2 + 0.9375; }
  const t2 = t - 2.625 / 2.75; return 7.5625 * t2 * t2 + 0.984375;
}

// ─── Component ───────────────────────────────────────────────────────────────
export function QuincyGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [lastTrick, setLastTrick] = useState('');
  const [lastPoints, setLastPoints] = useState(0);

  const mouseRef = useRef({ x: W / 2, y: H / 2 });
  const phaseRef = useRef<Phase>('sleeping');
  const dogRef = useRef<DogState>({
    x: 130, y: 244,
    phase: 'sleeping', trick: 'jump', trickTimer: 0,
    eyesOpen: false, tailWag: 0, mouthOpen: false,
    rotation: 0, jumpY: 0, hasBall: false, zzz: 0,
  });
  const ballRef = useRef<Ball | null>(null);
  const scoreRef = useRef(0);
  const timeRef = useRef(0);
  const celebrateRef = useRef(0);
  const throwCountRef = useRef(0);

  // BED_X/Y — where Quincy returns after catching
  const BED_X = 130;
  const BED_Y = 244;

  const resetDogToBed = useCallback(() => {
    const dog = dogRef.current;
    dog.x = BED_X;
    dog.y = BED_Y;
    dog.phase = 'sleeping';
    dog.eyesOpen = false;
    dog.mouthOpen = false;
    dog.rotation = 0;
    dog.jumpY = 0;
    dog.hasBall = false;
    dog.trickTimer = 0;
    phaseRef.current = 'sleeping';
    ballRef.current = null;
  }, []);

  // Mouse tracking (relative to canvas)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const move = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = W / rect.width;
      const scaleY = H / rect.height;
      mouseRef.current = {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
      };
    };
    canvas.addEventListener('mousemove', move);
    return () => canvas.removeEventListener('mousemove', move);
  }, []);

  // Click to throw
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const click = () => {
      const phase = phaseRef.current;
      if (phase === 'sleeping') {
        // Wake up and enter aiming mode
        const dog = dogRef.current;
        dog.eyesOpen = true;
        dog.phase = 'aiming';
        dog.mouthOpen = true;
        phaseRef.current = 'aiming';
      } else if (phase === 'aiming') {
        // Throw the ball!
        const m = mouseRef.current;
        ballRef.current = {
          x: 20, y: H - 40,  // thrown from bottom-left (you)
          vx: 0, vy: 0,
          targetX: m.x, targetY: m.y,
          progress: 0,
        };
        phaseRef.current = 'throwing';
        dogRef.current.phase = 'throwing';
        throwCountRef.current++;
      }
    };
    canvas.addEventListener('click', click);
    return () => canvas.removeEventListener('click', click);
  }, []);

  // Game loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf: number;
    let prevNow = 0;

    const loop = (now: number) => {
      if (prevNow === 0) prevNow = now;
      const dt = Math.min(0.05, (now - prevNow) / 1000);
      prevNow = now;
      timeRef.current += dt;
      const t = timeRef.current;

      const dog = dogRef.current;
      const ball = ballRef.current;

      // ── UPDATE ────────────────────────────────────────────────────────
      if (phaseRef.current === 'throwing' && ball) {
        ball.progress += dt * 1.8; // ball travel speed

        // Arc from throw origin to target
        const p = Math.min(1, ball.progress);
        ball.x = 20 + (ball.targetX - 20) * p;
        ball.y = (H - 40) + (ball.targetY - (H - 40)) * p - Math.sin(p * Math.PI) * 100;

        if (p >= 0.5 && dog.phase !== 'catching') {
          // Quincy starts his trick!
          dog.phase = 'catching';
          dog.trick = pick([...TRICKS]);
          dog.trickTimer = 0;
          dog.mouthOpen = true;
          phaseRef.current = 'catching';
        }
      }

      if (phaseRef.current === 'catching') {
        dog.trickTimer += dt * 1.8;
        const tt = Math.min(1, dog.trickTimer);

        // Move toward ball target
        if (ball) {
          dog.x += (ball.targetX - dog.x) * dt * 5;
          dog.y += (ball.targetY + 15 - dog.y) * dt * 4;
        }

        // Jump height — parabolic arc
        const jumpPeak = 70;
        dog.jumpY = Math.sin(tt * Math.PI) * jumpPeak;

        // Trick animations
        switch (dog.trick) {
          case 'backflip':
            dog.rotation = tt * 360;
            break;
          case 'frontflip':
            dog.rotation = -tt * 360;
            break;
          case 'spin':
            // Spin is a horizontal barrel roll — we simulate with squash/stretch via rotation
            dog.rotation = Math.sin(tt * Math.PI * 3) * 25;
            break;
          case 'jump':
            dog.jumpY = Math.sin(tt * Math.PI) * (jumpPeak + 20);
            dog.rotation = Math.sin(tt * Math.PI) * 8;
            break;
          case 'roll':
            dog.rotation = tt * 720; // two full rotations
            break;
          case 'wiggle':
            dog.rotation = Math.sin(tt * Math.PI * 6) * 20;
            break;
        }

        // Catch the ball at peak
        if (tt >= 0.45 && !dog.hasBall) {
          dog.hasBall = true;
          ballRef.current = null;
          // Score!
          const points = TRICK_POINTS[dog.trick];
          scoreRef.current += points;
          setScore(scoreRef.current);
          setLastTrick(TRICK_LABELS[dog.trick]);
          setLastPoints(points);
          celebrateRef.current = t;
        }

        // Done with trick
        if (tt >= 1) {
          dog.phase = 'celebrating';
          phaseRef.current = 'celebrating';
          dog.rotation = 0;
          dog.jumpY = 0;
          dog.trickTimer = 0;
        }
      }

      if (phaseRef.current === 'celebrating') {
        dog.trickTimer += dt;
        dog.mouthOpen = true;
        dog.rotation = 0;

        // Bounce back down
        dog.jumpY = Math.max(0, dog.jumpY - dt * 120);

        // Return to bed after celebration
        if (dog.trickTimer > 2.0) {
          dog.x += (BED_X - dog.x) * dt * 3;
          dog.y += (BED_Y - dog.y) * dt * 3;
          dog.hasBall = false; // drops ball

          if (Math.abs(dog.x - BED_X) < 2 && Math.abs(dog.y - BED_Y) < 2) {
            resetDogToBed();
          }
        }
      }

      // ── RENDER ────────────────────────────────────────────────────────
      ctx.clearRect(0, 0, W, H);

      drawRoom(ctx);
      drawBed(ctx);

      // Ball on ground (before throw or dropped)
      if (phaseRef.current === 'sleeping' || phaseRef.current === 'aiming') {
        // Show a ball near the left side (waiting to be thrown)
        const bob = Math.sin(t * 3) * 2;
        drawBall(ctx, 30, H - 28 + bob, 8);

        if (phaseRef.current === 'aiming') {
          // Aim line
          const m = mouseRef.current;
          ctx.setLineDash([4, 4]);
          ctx.strokeStyle = 'rgba(232,85,0,0.35)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(30, H - 28);
          ctx.quadraticCurveTo((30 + m.x) / 2, Math.min(m.y, H - 28) - 60, m.x, m.y);
          ctx.stroke();
          ctx.setLineDash([]);

          drawCrosshair(ctx, m.x, m.y);
        }
      }

      // Ball in flight
      if (ball && phaseRef.current === 'throwing') {
        drawBall(ctx, ball.x, ball.y, 7);
      }

      // Dog
      drawDog(ctx, dog, t);

      // Celebration text
      if (phaseRef.current === 'celebrating' && dog.trickTimer < 2.0) {
        const fade = Math.min(1, dog.trickTimer * 3) * Math.max(0, 1 - (dog.trickTimer - 1.5) * 2);
        const bounce = easeOutBounce(Math.min(1, dog.trickTimer * 2));
        const scale = 0.5 + bounce * 0.5;
        ctx.save();
        ctx.globalAlpha = fade;
        ctx.font = `bold ${Math.round(16 * scale)}px monospace`;
        ctx.textAlign = 'center';
        ctx.fillStyle = COL.hudShadow;
        ctx.fillText(lastTrick, dog.x + 1, dog.y - 60 - dog.jumpY + 1);
        ctx.fillStyle = COL.kong;
        ctx.fillText(lastTrick, dog.x, dog.y - 60 - dog.jumpY);
        ctx.font = `bold ${Math.round(11 * scale)}px monospace`;
        ctx.fillStyle = '#ffdd44';
        ctx.fillText(`+${lastPoints}`, dog.x, dog.y - 44 - dog.jumpY);
        ctx.restore();
        ctx.textAlign = 'left';
      }

      // HUD
      ctx.font = 'bold 9px monospace';
      ctx.fillStyle = COL.hudShadow;
      ctx.fillText(`SCORE: ${scoreRef.current}`, 5 + 1, 13 + 1);
      ctx.fillStyle = COL.hud;
      ctx.fillText(`SCORE: ${scoreRef.current}`, 5, 13);

      ctx.fillStyle = COL.hudShadow;
      ctx.fillText(`THROWS: ${throwCountRef.current}`, 5 + 1, 25 + 1);
      ctx.fillStyle = COL.hud;
      ctx.fillText(`THROWS: ${throwCountRef.current}`, 5, 25);

      // Instructions
      if (phaseRef.current === 'sleeping') {
        ctx.font = '8px monospace';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        const blink = Math.floor(t * 2) % 2 === 0;
        if (blink) ctx.fillText('[ CLICK TO WAKE QUINCY ]', W / 2, H - 8);
        ctx.textAlign = 'left';
      } else if (phaseRef.current === 'aiming') {
        ctx.font = '8px monospace';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.fillText('AIM AND CLICK TO THROW THE BALL', W / 2, H - 8);
        ctx.textAlign = 'left';
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [lastTrick, lastPoints, resetDogToBed]);

  return (
    <section className="game-section" id="game">
      <div className="game-section__inner">
        <div className="game-section__header">
          <h2 className="section-label">// good boy simulator</h2>
          <h3 className="game-title">
            Fetch with <span>Quincy</span>
          </h3>
          <p className="game-subtitle">
            Wake him up. Throw the Kong ball. Watch him show off.
          </p>
        </div>
        <div className="game-wrapper">
          <canvas
            ref={canvasRef}
            width={W}
            height={H}
            className="game-canvas game-canvas--quincy"
          />
        </div>
        <div className="game-section__score">
          <div className="live-score">
            Score: <strong>{score}</strong>
          </div>
          {lastTrick && (
            <div className="hi-score">
              Last: <strong>{lastTrick}</strong>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

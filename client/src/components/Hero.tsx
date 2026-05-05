import { useEffect, useRef, useState } from 'react';

const ROLES = [
  'Senior Frontend Developer',
  'Full Stack Engineer',
  'UX Thinker',
  'Performance Obsessive',
  'Car Enthusiast',
  'Tech Nerd',
];

function StarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let rafId: number;
    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random(),
      size: Math.random() * 1.5 + 0.3,
      speed: Math.random() * 0.00008 + 0.00002,
    }));

    const draw = () => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const s of stars) {
        s.x += s.speed;
        if (s.x > 1) { s.x = 0; s.y = Math.random(); }
        const alpha = 0.3 + s.z * 0.7;
        ctx.fillStyle = `rgba(200, 210, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(s.x * canvas.width, s.y * canvas.height, s.size, 0, Math.PI * 2);
        ctx.fill();
      }
      rafId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(rafId); window.removeEventListener('resize', resize); };
  }, []);

  return <canvas ref={canvasRef} className="hero__stars" aria-hidden="true" />;
}

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const target = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < target.length) {
      timeout = setTimeout(() => setCharIndex(i => i + 1), 60);
    } else if (!deleting && charIndex === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(i => i - 1), 30);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex(i => (i + 1) % ROLES.length);
    }

    setDisplayed(target.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToGame = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#game')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <StarCanvas />
      <div className="hero__content">
        <div className="hero__eyebrow">Hello, I&apos;m</div>
        <h1 className="hero__name">Jason Rhodes</h1>
        <div className="hero__role">
          <span className="hero__role-text">{displayed}</span>
          <span className="hero__cursor" aria-hidden="true">_</span>
        </div>
        <p className="hero__tagline">
          20+ years building things people actually use.
          <br />
          From NASA contractors to children&apos;s education.
          <br />
          Based in Baltimore, MD.
        </p>
        <div className="hero__ctas">
          <a className="btn btn--primary" href="#portfolio" onClick={scrollToWork}>View My Work</a>
          <a className="btn btn--ghost" href="#about" onClick={scrollToAbout}>About Me</a>
          <a className="btn btn--game" href="#game" onClick={scrollToGame}>Play a Game ↓</a>
        </div>
        <div className="hero__social">
          <a href="https://github.com/rhodesman" target="_blank" rel="noreferrer" title="GitHub">
            <i className="fa-brands fa-github" />
          </a>
          <a href="https://linkedin.com/in/rhodesman" target="_blank" rel="noreferrer" title="LinkedIn">
            <i className="fa-brands fa-linkedin" />
          </a>
          <a href="mailto:jason.rhodes@gmail.com" title="Email">
            <i className="fa-regular fa-envelope" />
          </a>
        </div>
      </div>
      <div className="hero__scroll-hint" onClick={scrollToAbout}>
        <span>scroll</span>
        <i className="fa-solid fa-chevron-down" />
      </div>
    </section>
  );
}

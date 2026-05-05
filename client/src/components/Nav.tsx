import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#about',      label: 'About'      },
  { href: '#skills',     label: 'Skills'     },
  { href: '#experience', label: 'Experience' },
  { href: '#portfolio',  label: 'Work'       },
  { href: '#game',       label: 'Game'       },
  { href: '#contact',    label: 'Contact'    },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`site-nav${scrolled ? ' site-nav--scrolled' : ''}${open ? ' site-nav--open' : ''}`}>
      <div className="site-nav__inner">
        <a className="site-nav__logo" href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <span className="logo-bracket">[</span>jr<span className="logo-bracket">]</span>
        </a>
        <button className="site-nav__burger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
        <ul className="site-nav__links">
          {LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={e => handleLink(e, l.href)}>{l.label}</a>
            </li>
          ))}
          <li>
            <a className="nav-cta" href="mailto:jason.rhodes@gmail.com">Hire Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

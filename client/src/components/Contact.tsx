export function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-inner">
        <h2 className="section-label">// contact</h2>
        <h3 className="section-title">Let&apos;s build something together</h3>
        <p className="contact-intro">
          I&apos;m actively looking for my next senior frontend or full-stack role.
          Remote preferred, Baltimore/DC metro open to hybrid.
          Target range: $140K–$180K.
        </p>
        <div className="contact-links">
          <a className="contact-card" href="mailto:jason.rhodes@gmail.com">
            <i className="fa-regular fa-envelope" />
            <div>
              <div className="contact-card__label">Email</div>
              <div className="contact-card__value">jason.rhodes@gmail.com</div>
            </div>
          </a>
          <a className="contact-card" href="https://linkedin.com/in/rhodesman" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin" />
            <div>
              <div className="contact-card__label">LinkedIn</div>
              <div className="contact-card__value">linkedin.com/in/rhodesman</div>
            </div>
          </a>
          <a className="contact-card" href="https://github.com/rhodesman" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github" />
            <div>
              <div className="contact-card__label">GitHub</div>
              <div className="contact-card__value">github.com/rhodesman</div>
            </div>
          </a>
        </div>
        <div className="contact-footer">
          <p className="easter-egg-hint">
            <span className="mono">{'>'}</span> Try the browser console for a little surprise...
          </p>
        </div>
      </div>
      <div className="site-footer">
        <span>© 2026 Jason Rhodes — Built with React + Vite. Pixel art included at no extra charge.</span>
        <span className="site-footer__version">
          <a href="https://github.com/rhodesman/jrhodes_com/releases/tag/v2.0-archive" target="_blank" rel="noreferrer">
            v2.0 archived
          </a>
          {' '}| v3.0 live
        </span>
      </div>
    </section>
  );
}

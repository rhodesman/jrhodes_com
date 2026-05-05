export function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-inner">
        <h2 className="section-label">// about me</h2>
        <div className="about-grid">
          <div className="about-text">
            <h3 className="about-title">
              I build the web.<br />
              <span className="accent">I&apos;ve been doing it since before Google was a verb.</span>
            </h3>
            <p>
              My career started in 2000 — the wild-west era of table layouts and Flash intros.
              I've watched the web grow up, and I grew with it. Today I specialize in
              modern React/TypeScript frontends with a deep obsession for performance,
              accessibility, and UX that actually makes sense.
            </p>
            <p>
              My Computer Science degree had a focus on{' '}
              <strong>Computer Graphics &amp; 3D Modeling</strong> — which explains why I care
              so much about how things look, not just how they work.
              That visual thinking has carried through everything from defense-contractor
              dashboards to children&apos;s education apps.
            </p>
            <p>
              Speaking of which — my education startup{' '}
              <strong>Wonderbean Studios</strong> was a{' '}
              <span className="highlight">Runner-up for a Webby Award</span>{' '}
              in Online Children&apos;s Education (13,000+ entries annually).
              Not a bad thing to have on a wall.
            </p>
            <p>
              Most recently I rebuilt{' '}
              <a href="https://windownation.com" target="_blank" rel="noreferrer">windownation.com</a>{' '}
              — migrating a legacy WordPress site to Next.js/React serving 150K+ monthly
              visitors, pushing Lighthouse from <strong>27 → 97</strong>.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m probably wrenching on a car, messing with my home lab,
              or wondering if the Jurassic Park T-Rex really could outrun a Jeep.
            </p>
          </div>
          <div className="about-facts">
            <div className="fact-card">
              <div className="fact-card__num">20<span>+</span></div>
              <div className="fact-card__label">Years of Experience</div>
            </div>
            <div className="fact-card">
              <div className="fact-card__num">150K</div>
              <div className="fact-card__label">Monthly Users Served</div>
            </div>
            <div className="fact-card fact-card--accent">
              <div className="fact-card__num">27→97</div>
              <div className="fact-card__label">Lighthouse Score Lift</div>
            </div>
            <div className="fact-card">
              <div className="fact-card__num">1</div>
              <div className="fact-card__label">Webby Award Nomination</div>
            </div>
            <div className="about-badges">
              <span className="badge">Baltimore, MD</span>
              <span className="badge">Remote Ready</span>
              <span className="badge">Open to Work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

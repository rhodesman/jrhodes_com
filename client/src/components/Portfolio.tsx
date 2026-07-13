const PROJECTS = [
  {
    name: 'Window Nation',
    category: 'Full Stack',
    desc: 'Full site migration from legacy WordPress to Next.js/React. 150K+ monthly visitors, Lighthouse 27→97.',
    url: 'https://windownation.com/',
    tags: ['Next.js', 'React', 'TypeScript', 'Performance'],
    featured: true,
  },
  {
    name: 'Curious George Interactive',
    category: 'UX + Frontend',
    desc: 'Award-nominated children\'s education platform. Interactive games, stories, and printables.',
    url: 'https://curiousgeorge.jasonrhodes.me/',
    repo: 'https://github.com/rhodesman/curious-george-jr',
    tags: ['UX Design', 'JavaScript', 'CSS', 'Education'],
    featured: true,
  },
  {
    name: 'Cleco',
    category: 'UX + Full Stack',
    desc: 'Unified brand site combining the Neotek, Grinder, and CellCore product lines into a single entry point, with complex product navigation and a UX redesign.',
    url: 'https://cleco.jasonrhodes.me/',
    repo: 'https://github.com/rhodesman/Cleco-Client',
    tags: ['UX Design', 'Frontend', 'SCSS'],
    featured: false,
  },
  {
    name: 'Power to Decide Store',
    category: 'eCommerce',
    desc: 'Full-stack eCommerce implementation for reproductive health nonprofit.',
    url: 'https://shop.powertodecide.org/',
    tags: ['eCommerce', 'Node.js', 'CSS'],
    featured: false,
  },
  {
    name: 'oPower / PG&E Energy Dashboard',
    category: 'Data Visualization',
    desc: 'AngularJS energy usage dashboard with real-time data, usage history, and utility billing UI.',
    url: 'https://opower.jasonrhodes.me/',
    repo: 'https://github.com/rhodesman/opower-pge',
    tags: ['AngularJS', 'D3.js', 'Foundation', 'APIs'],
    featured: true,
  },
  {
    name: 'Iron Radar',
    category: 'Security / Dashboard',
    desc: 'Framework-detection recon dashboard — identifies web technologies on target systems with confidence scoring, detection-coverage analysis, and CSV export.',
    url: 'https://ironradar.jasonrhodes.me/',
    repo: 'https://github.com/rhodesman/ironRadar',
    tags: ['Node.js', 'SCSS', 'Docker', 'Security', 'Dashboard'],
    featured: true,
  },
];

export function Portfolio() {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="section-inner">
        <h2 className="section-label">// portfolio</h2>
        <h3 className="section-title">Things I&apos;ve shipped</h3>
        <div className="portfolio-grid">
          {PROJECTS.map(p => (
            <div
              key={p.name}
              className={`portfolio-card${p.featured ? ' portfolio-card--featured' : ''}`}
            >
              <a
                className="portfolio-card__link"
                href={p.url}
                target={p.url.startsWith('http') ? '_blank' : '_self'}
                rel={p.url.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={`${p.name} — open live site`}
              />
              <div className="portfolio-card__category">{p.category}</div>
              <div className="portfolio-card__name">{p.name}</div>
              <div className="portfolio-card__desc">{p.desc}</div>
              <div className="portfolio-card__tags">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              {p.repo && (
                <a
                  className="portfolio-card__repo"
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github" /> View code
                </a>
              )}
              <span className="portfolio-card__arrow" aria-hidden="true">
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

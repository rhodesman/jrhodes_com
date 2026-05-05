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
    tags: ['UX Design', 'JavaScript', 'CSS', 'Education'],
    featured: true,
  },
  {
    name: 'Cleco Neotek',
    category: 'UX + Full Stack',
    desc: 'Industrial tooling brand site with complex product navigation and UX redesign.',
    url: 'https://neotek.jasonrhodes.me/',
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
    url: '/live-demos/opower-pge/',
    tags: ['AngularJS', 'D3.js', 'Foundation', 'APIs'],
    featured: true,
  },
  {
    name: 'Liberty Mutual Annual Review',
    category: 'Marketing',
    desc: 'Interactive corporate annual review site with video modals and multimedia content.',
    url: '/live-demos/liberty-mutual/',
    tags: ['jQuery', 'Bootstrap', 'Video', 'HTML5'],
    featured: false,
  },
  {
    name: 'City Garage 4K Touch Kiosk',
    category: 'Hardware Interface',
    desc: 'Custom-built 4K touchscreen kiosk UI for auto service shop. Yes, really.',
    url: 'https://cgkiosk.wblabs.co/',
    tags: ['Touch UI', 'JavaScript', '4K Display'],
    featured: false,
  },
  {
    name: 'YMCA Maryland 5K',
    category: 'UX Design',
    desc: 'Event marketing site with registration flow for annual turkey trot 5K run.',
    url: 'https://ymdturkeytrot.org/',
    tags: ['UX Design', 'CSS', 'Events'],
    featured: false,
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
            <a
              key={p.name}
              href={p.url}
              target={p.url.startsWith('http') ? '_blank' : '_self'}
              rel={p.url.startsWith('http') ? 'noreferrer' : undefined}
              className={`portfolio-card${p.featured ? ' portfolio-card--featured' : ''}`}
            >
              <div className="portfolio-card__category">{p.category}</div>
              <div className="portfolio-card__name">{p.name}</div>
              <div className="portfolio-card__desc">{p.desc}</div>
              <div className="portfolio-card__tags">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <div className="portfolio-card__arrow">
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const JOBS = [
  {
    title: 'Sr. Frontend Developer',
    company: 'Window Nation',
    location: 'Fulton, MD (Remote)',
    dates: '2023 – 2026',
    highlights: [
      'Led full migration from legacy WordPress to Next.js/React for 150K+ monthly visitors',
      'Lifted Lighthouse score from 27 → 97 via code splitting, lazy loading, and asset optimization',
      'Built reusable React component library with SCSS design tokens',
      'Established Git workflows, CI/CD pipelines, and QA review processes',
    ],
    tags: ['React', 'Next.js', 'TypeScript', 'SCSS', 'CI/CD'],
    accent: false,
  },
  {
    title: 'Freelance Frontend Developer',
    company: 'Cyber Knowledge Partners',
    location: 'Baltimore, MD',
    dates: '2025 – 2026',
    highlights: [
      'Built frontend interfaces for cybersecurity advisory firm',
      'Developed reusable UI components with responsive design and brand alignment',
    ],
    tags: ['React', 'SCSS', 'UI/UX'],
    accent: false,
  },
  {
    title: 'Frontend Software Engineer',
    company: 'IronNet',
    location: 'McLean, VA (Contract)',
    dates: 'Nov 2023 – May 2024',
    highlights: [
      'Designed interactive SPA dashboards for a cybersecurity platform using AngularJS',
      'Built data visualization components for complex real-time security datasets',
      'Led UX/UI design from wireframe through production',
    ],
    tags: ['AngularJS', 'Data Viz', 'REST APIs', 'UX Design'],
    accent: false,
  },
  {
    title: 'Sr. Frontend Developer & Software Engineer',
    company: 'WebbMason Marketing',
    location: 'Baltimore, MD',
    dates: '2015 – 2023',
    highlights: [
      'Architected frontend for 15+ eCommerce applications on Adobe Commerce Cloud',
      'Built full-stack Node.js internal tooling for landing page templating',
      'Designed custom API integrations for order processing and data systems',
      'Reduced developer onboarding time by 35% via comprehensive documentation',
      'Ensured PCI compliance across customer-facing applications',
    ],
    tags: ['Node.js', 'Adobe Commerce', 'PHP', 'SCSS', 'APIs'],
    accent: false,
  },
  {
    title: 'Founder & Lead Developer',
    company: 'Wonderbean Studios',
    location: 'Sparks, MD',
    dates: '2011 – 2015',
    highlights: [
      '🏆 Runner-up, Webby Award — Online Children\'s Education (13,000+ annual entries)',
      'Built mobile-first SPAs using AngularJS and SCSS',
      'Led end-to-end product development from UX design through frontend implementation',
      'Managed agile development teams and product delivery',
    ],
    tags: ['AngularJS', 'SCSS', 'Mobile-First', 'Product'],
    accent: true,
  },
  {
    title: 'Senior UI/UX Developer',
    company: 'General Dynamics',
    location: 'Baltimore, MD',
    dates: '2009 – 2011',
    highlights: [
      'Developed consistent UIs across multiple enterprise applications',
      'Established frontend coding standards and CSS best practices',
      'Mentored developers on semantic HTML and web standards',
    ],
    tags: ['UI/UX', 'CSS', 'Enterprise', 'Mentoring'],
    accent: false,
  },
  {
    title: 'Senior UI/UX Designer & Developer',
    company: 'Lockheed Martin',
    location: 'Baltimore, MD',
    dates: '2007 – 2009',
    highlights: [
      'Designed and prototyped UIs for internal enterprise applications',
      'Ensured WCAG accessibility and web standards compliance',
    ],
    tags: ['UI/UX', 'WCAG', 'Enterprise'],
    accent: false,
  },
];

export function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="section-inner">
        <h2 className="section-label">// experience</h2>
        <h3 className="section-title">20+ years of building</h3>
        <div className="timeline">
          {JOBS.map((job, i) => (
            <div key={i} className={`timeline-item${job.accent ? ' timeline-item--accent' : ''}`}>
              <div className="timeline-item__dot" />
              <div className="timeline-item__card">
                <div className="timeline-item__header">
                  <div>
                    <div className="timeline-item__title">{job.title}</div>
                    <div className="timeline-item__company">{job.company} — {job.location}</div>
                  </div>
                  <div className="timeline-item__dates">{job.dates}</div>
                </div>
                <ul className="timeline-item__highlights">
                  {job.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
                <div className="timeline-item__tags">
                  {job.tags.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

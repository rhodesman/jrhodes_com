const SKILL_GROUPS = [
  {
    label: 'Frontend',
    icon: 'fa-solid fa-display',
    skills: [
      { name: 'React / Next.js',    level: 95 },
      { name: 'TypeScript / JS',    level: 95 },
      { name: 'HTML5 / CSS3',       level: 98 },
      { name: 'SCSS / Sass',        level: 95 },
      { name: 'AngularJS',          level: 80 },
      { name: 'Vite / Webpack',     level: 85 },
      { name: 'Bootstrap / Tailwind', level: 90 },
    ],
  },
  {
    label: 'UX & Design',
    icon: 'fa-solid fa-pen-ruler',
    skills: [
      { name: 'UI/UX Design',       level: 90 },
      { name: 'Figma',              level: 85 },
      { name: 'Adobe Photoshop',    level: 85 },
      { name: 'Wireframing',        level: 90 },
      { name: 'Accessibility (WCAG)', level: 88 },
      { name: 'Data Visualization', level: 80 },
    ],
  },
  {
    label: 'Backend & Infra',
    icon: 'fa-solid fa-server',
    skills: [
      { name: 'Node.js / Express',  level: 85 },
      { name: 'PHP',                level: 75 },
      { name: 'MySQL / MariaDB',    level: 75 },
      { name: 'REST APIs',          level: 92 },
      { name: 'CI/CD Pipelines',    level: 80 },
      { name: 'Git / GitHub',       level: 95 },
    ],
  },
  {
    label: 'Performance',
    icon: 'fa-solid fa-gauge-high',
    skills: [
      { name: 'Lighthouse / Core Web Vitals', level: 95 },
      { name: 'Code Splitting',     level: 90 },
      { name: 'Asset Optimization', level: 92 },
      { name: 'SEO',                level: 82 },
      { name: 'Chrome DevTools',    level: 90 },
    ],
  },
];

export function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-inner">
        <h2 className="section-label">// skills</h2>
        <h3 className="section-title">What I bring to the table</h3>
        <div className="skills-grid">
          {SKILL_GROUPS.map(group => (
            <div className="skill-group" key={group.label}>
              <div className="skill-group__header">
                <i className={group.icon} />
                <span>{group.label}</span>
              </div>
              <ul className="skill-list">
                {group.skills.map(s => (
                  <li key={s.name} className="skill-item">
                    <div className="skill-item__top">
                      <span className="skill-name">{s.name}</span>
                      <span className="skill-pct">{s.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar__fill"
                        style={{ '--skill-level': `${s.level}%` } as React.CSSProperties}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

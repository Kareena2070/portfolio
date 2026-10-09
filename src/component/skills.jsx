
function SkillSection() {
  const groups = [
    [
      "01",
      "Frontend",
      "React.js / Next.js / JavaScript / TypeScript / HTML / CSS / Tailwind CSS",
    ],
    [
      "02",
      "Backend & APIs",
      "Node.js / Express.js / REST APIs / JWT Authentication / MongoDB / PostgreSQL",
    ],
    [
      "03",
      "WordPress & CMS",
      "Custom WordPress Themes / PHP / Advanced Custom Fields (ACF) / Custom Post Types / Gutenberg / Dynamic Pages",
    ],
    [
      "04",
      "Tools & Deployment",
      "Git / GitHub / Vercel / Netlify / Vite / Cloudinary / Website Migration & Deployment",
    ],
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="site-shell">
        <div className="skills-head">
          <div>
            <p className="eyebrow">A considered toolkit</p>
            <h2 className="display-title">
              Skills &<br />
              toolkit
            </h2>
          </div>
          <p className="section-heading-note">
            From custom WordPress websites to full-stack web applications,
            I build responsive digital experiences from development to deployment.
          </p>
        </div>

        <div>
          {groups.map(([number, title, list]) => (
            <div className="skill-row" key={number}>
              <span className="skill-index">{number}</span>
              <h3 className="skill-title">{title}</h3>
              <p className="skill-list">{list}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillSection;

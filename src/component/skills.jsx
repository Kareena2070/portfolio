function SkillSection() {
  const groups = [
    ["01", "Frontend", "React / Next.js / JavaScript / TypeScript / Tailwind CSS / HTML / CSS"],
    ["02", "Backend", "Node.js / Express.js / REST APIs / JWT / MongoDB / PostgreSQL"],
    ["03", "CMS & content", "WordPress / PHP / Advanced Custom Fields / Gutenberg"],
    ["04", "Tools", "Git / GitHub / Vercel / Netlify / Vite / Cloudinary"],
  ];
  return (
    <section id="skills" className="skills-section">
      <div className="site-shell">
        <div className="skills-head"><div><p className="eyebrow">A considered toolkit</p><h2 className="display-title">Skills &<br/>toolkit</h2></div><p className="section-heading-note">The tools I use to shape reliable, considered digital experiences.</p></div>
        <div>{groups.map(([number, title, list]) => <div className="skill-row" key={number}><span className="skill-index">{number}</span><h3 className="skill-title">{title}</h3><p className="skill-list">{list}</p></div>)}</div>
      </div>
    </section>
  );
}
export default SkillSection;

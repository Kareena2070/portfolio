function Experience() {
  const experiences = [
    { date: "Jul 2026 — Present", role: "Frontend Developer", company: "Lawizer", description: "Building a production admin dashboard and connecting case, service, chat and workflow features to REST APIs." },
    { date: "Jan 2026 — Jul 2026", role: "Full Stack Developer Intern", company: "CodeSoar Technologies", description: "Developed reusable React and Next.js components, integrated APIs and collaborated in a remote engineering team." },
    { date: "2025", role: "Freelance Web Developer", company: "GenzAstology", description: "Designed and launched a responsive business website, establishing the client’s professional online presence." },
    { date: "2024 — Present", role: "Full Stack Developer · Training & projects", company: "NavGurukul", description: "Building projects with React, Next.js, JavaScript and TypeScript while practicing algorithms and collaborative development." },
  ];
  return (
    <section id="experience" className="experience-section">
      <div className="site-shell">
        <div className="experience-heading"><div><p className="eyebrow">Selected chapters</p><h2 className="display-title">Experience</h2></div><p>Learning through hands-on work, close collaboration and products built for people.</p></div>
        {experiences.map((item) => <article className="experience-row" key={item.company}><span className="experience-date">{item.date}</span><div><h3 className="experience-role">{item.role}</h3><p className="experience-company">{item.company}</p></div><p className="experience-description">{item.description}</p></article>)}
      </div>
    </section>
  );
}
export default Experience;

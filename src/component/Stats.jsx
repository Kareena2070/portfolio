function Stats() {
  const stats = [
    { number: "03+", title: "Production projects" },
    { number: "02", title: "Freelance client deliveries" },
    { number: "15+", title: "Technologies used" },
  ];
  return (
    <section className="site-shell" aria-label="Portfolio statistics">
      <div className="stats-strip">
        {stats.map((item) => <div className="stat-item" key={item.title}><span className="stat-number">{item.number}</span><span className="stat-label">{item.title}</span></div>)}
      </div>
    </section>
  );
}
export default Stats;

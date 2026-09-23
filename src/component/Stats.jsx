function Stats() {
  const stats = [
    {
      number: "3+",
      title: "Production Projects",
    },
    {
      number: "2",
      title: "Freelance Client Delivered",
    },
    {
      number: "15+",
      title: "Technologies Used",
    },
    // {
    //   number: "1500+",
    //   title: "Hours Learning & Building",
    // },
  ];

  return (
    <section className="container py-5">
      <div className="row text-center">
        {stats.map((item, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="border rounded-4 p-4 shadow-sm h-100">
              <h1 className="fw-bold">{item.number}</h1>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;

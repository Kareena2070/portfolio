function Experience() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Lawizer",
      duration: "Jul 2026 – Present",
      points: [
        "Developed and maintained a production admin dashboard for case, service, document, and workflow management using React.js and JavaScript",
        "Integrated and debugged REST APIs for cases, services, users, experts, chat, notifications, transactions, and authentication using Axios and Bearer-token based authentication",
        "Implemented Axios interceptors for authenticated requests and collaborated with backend developers to troubleshoot API issues and clarify API contracts",
        "Delivered features across case management, expert assignment, chat, notifications, and responsive dashboard workflows",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "CodeSoar Technologies",
      duration: "Jan 2026 – Jul 2026",
      points: [
        "Developed reusable React.js and Next.js components for responsive web applications",
        "Integrated REST APIs and handled frontend-backend data flows across application features",
        "Debugged application issues and worked with remote engineering teams to resolve implementation problems",
        "Followed Git-based development and code-review workflows in a remote engineering environment",
      ],
    },

    {
      title: "Freelance Web Developer",
      company: "GenzAstology",
      duration: "2025",
      points: [
        "Worked directly with client requirements and business goals",
        "Designed and launched a fully responsive business website",
        "Established the client's first professional online presence",
        "Built a foundation for future SEO and digital marketing efforts",
      ],
    },

    {
      title: "Full Stack Developer (Full-Time Training & Projects) ",
      company: "NavGurukul",
      duration: "2024 – Present",
      points: [
        "Participating in intensive software development training and peer learning",
        "Building frontend projects using React, Next.js, JavaScript, and TypeScript",
        "Practicing data structures, algorithms, Git, and collaborative development workflows",
        "Contributing to coding discussions, project reviews, and community learning initiatives",
      ],
    },
  ];

  return (
    <section id="experience" className="py-10 bg-white">
      {" "}
      <div className="max-w-6xl mx-auto px-6">
        {" "}
        {/* Heading */}{" "}
        <div className="text-center mb-8">
          {" "}
          <h2 className="text-4xl font-bold mt-2">
            {" "}
            Professional Experience{" "}
          </h2>{" "}
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {" "}
            My experience building production applications, working with
            engineering teams, and contributing to community initiatives.{" "}
          </p>{" "}
        </div>{" "}
        {/* Experience Cards */}{" "}
        <div className="space-y-8">
          {" "}
          {experiences.map((exp, index) => (
            <div key={index} className="bg-slate-50 rounded-3xl p-8 shadow-sm">
              {" "}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                {" "}
                <div>
                  {" "}
                  <h3 className="text-2xl font-bold"> {exp.title} </h3>{" "}
                  <p className="text-blue-600 font-medium">
                    {" "}
                    {exp.company}{" "}
                  </p>{" "}
                </div>{" "}
                <span className="mt-2 md:mt-0 px-4 py-2 bg-white rounded-full border text-sm">
                  {" "}
                  {exp.duration}{" "}
                </span>{" "}
              </div>{" "}
              <ul className="space-y-3 text-gray-700">
                {" "}
                {exp.points.map((point, i) => (
                  <li key={i}> ✓ {point} </li>
                ))}{" "}
              </ul>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}

export default Experience;

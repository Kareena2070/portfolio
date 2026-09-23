function HeroSection({ img }) {
  return (
    <section id="about" className="min-h-[70vh] flex items-center bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <p className="text-blue-600 font-semibold mb-3">Hello, I'm</p>

            <h1 className="text-6xl md:text-7xl fw-bold text-slate-900 leading-tight">
              Kareena Yadav
            </h1>

            <h2 className="text-xl font-semibold text-slate-700 mt-4">
              Software Developer | Full Stack Engineer
            </h2>

            <p className="text-lg text-slate-600 mt-6 leading-relaxed max-w-xl">
              I build production-ready web applications across frontend, backend, APIs, and databases. I work with React, Next.js, Node.js, Express.js, and MongoDB to turn real product requirements into reliable, user-friendly software.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#contact"
                className="bg-black text-white px-6 py-3 rounded-xl font-medium hover:scale-105 transition"
              >
                Hire Me
              </a>

              <a
                href="#projects"
                className="border border-black px-6 py-3 rounded-xl font-medium hover:bg-gray-300 hover:text-white transition"
              >
                View Projects
              </a>
            </div>

            {/* Highlights */}

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="px-4 py-2 bg-white rounded-full shadow text-sm">
                React
              </span>

              <span className="px-4 py-2 bg-white rounded-full shadow text-sm">
                Next.js
              </span>

              <span className="px-4 py-2 bg-white rounded-full shadow text-sm">
                Node.js
              </span>

              <span className="px-4 py-2 bg-white rounded-full shadow text-sm">
                Express
              </span>

              <span className="px-4 py-2 bg-white rounded-full shadow text-sm">
                MongoDB 
              </span>
            </div>
          </div>

          {/* Right Side */}

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

              <img
                src={img}
                alt="Kareena Yadav"
                className="relative w-[280px] md:w-[360px] rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

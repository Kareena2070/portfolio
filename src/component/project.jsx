import worldCountriesData from "../assets/worldCountriesData.png";
import galleryHive from "../assets/galleryHive.png";
import savorySpace from "../assets/savorySpace.png";
import lazarev from "../assets/lazarev.png";
import loveQuiz from "../assets/doYouLove.png";
import foaFood from "../assets/foaFood.png";

function ProjectSection() {
  const projects = [
    { title: "E-commerce Storefront — FOA Food", description: "A responsive storefront built with reusable components, shared auth, cart and location state, geocoding APIs, and dynamic product and category pages.", stack: "Next.js / TypeScript / Tailwind CSS", image: foaFood, demo: "https://e-commerce-5xzd.vercel.app/", github: "https://github.com/Kareena2070/E_Commerce" },
    { title: "SavorySpace", description: "A recipe app for adding, exploring and saving recipes, with account flows and API-backed data.", stack: "HTML / CSS / JavaScript / React / SheetDB API", image: savorySpace, demo: "https://savoryspace.netlify.app/", github: "https://github.com/Kareena2070/SavorySpace-recipeApp.git" },
    { title: "Lazarev", description: "An animated agency-site recreation with interactive navigation, carousels, parallax imagery and progressive reveals.", stack: "HTML / CSS / JavaScript / GSAP", image: lazarev, demo: "https://lazarev-k.netlify.app", github: "https://github.com/Kareena2070/HTML-CSS-min-projec/tree/main/calculator" },
    { title: "World Countries Data", description: "An interactive explorer for 250+ countries, with search, sorting, country cards and population visualizations.", stack: "JavaScript / HTML / CSS / Chart.js", image: worldCountriesData, demo: "https://kareena2070.github.io/Countries-data/", github: "https://github.com/Kareena2070/Countries-data" },
    { title: "GalleryHive", description: "A Pinterest-style image gallery with uploads, categories, authentication, search and a responsive masonry layout.", stack: "HTML / CSS / JavaScript / LocalStorage", image: galleryHive, demo: "https://kareena2070.github.io/GalleryHive/", github: "https://github.com/Kareena2070/GalleryHive" },
    { title: "Interactive Love Quiz", description: "A playful multi-page experience with animated prompts and a lighthearted message at the end of the journey.", stack: "HTML / CSS / JavaScript", image: loveQuiz, demo: "https://kareena2070.github.io/project-do-you-love-me-/", github: "https://github.com/Kareena2070/project-do-you-love-me-" },
  ];

  return (
    <section id="more-projects" className="projects-section" style={{ paddingTop: 40 }}>
      <div className="site-shell">
        <div className="section-heading"><div><p className="eyebrow">More from the archive</p><h2 className="display-title" style={{ fontSize: "clamp(50px, 7vw, 92px)" }}>More projects</h2></div><p className="section-heading-note">Small experiments and focused builds, each one a chance to learn by making.</p></div>
        <div className="project-list">
          {projects.map((project, index) => <article className="project-entry" key={project.title}>
            <div className="project-content">
              <div className="project-meta"><span className="project-number">{String(index + 6).padStart(2, "0")}</span><span className="project-category">Independent build</span></div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-tech">{project.stack}</p>
              <div style={{ display: "flex", gap: 22 }}><a className="text-link" href={project.demo} target="_blank" rel="noopener noreferrer">Live project ↗</a><a className="text-link" href={project.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>
            </div>
            <a className="project-visual" href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title}`}><img src={project.image} alt={project.title} loading="lazy"/><span className="project-arrow" aria-hidden="true">↗</span></a>
          </article>)}
        </div>
      </div>
    </section>
  );
}
export default ProjectSection;

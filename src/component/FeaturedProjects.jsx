import sourcexcloud from "../assets/sourcexcloud.png";
import genzastology from "../assets/genzastology.png";
import foodyGo from "../assets/foodyGo.png";
import judgr from "../assets/judgr.png";
import handmadeArt from "../assets/handmadeArt.png";

const projects = [
  { number: "01", title: "SourceXCloud", category: "Client · Frontend development", description: "A technology and education platform bringing business solutions and industry-focused training together in a responsive, SEO-conscious experience.", stack: "Next.js / React / Tailwind CSS / SSR / SEO", image: sourcexcloud, imageAlt: "SourceXCloud website", href: "https://sourcexcloud.com" },
  { number: "02", title: "GenzAstrology", category: "Freelance · WordPress", description: "A custom, responsive online presence for a local astrologer, with dedicated service pages and a structure ready for discovery.", stack: "WordPress / PHP / ACF / HTML / CSS / JavaScript", image: genzastology, imageAlt: "GenzAstrology website", href: "https://genzastrology.com/" },
  { number: "03", title: "FoodyGo", category: "E-commerce · Frontend", description: "A modern storefront exploring reusable interface patterns, product and cart interactions, responsive layouts and application architecture.", stack: "Next.js / React / TypeScript / Tailwind CSS", image: foodyGo, imageAlt: "FoodyGo e-commerce storefront", href: "https://e-commerce-5xzd.vercel.app/" },
  { number: "04", title: "Judgr", category: "Full-stack · Platform", description: "A hackathon management and evaluation platform for participant, team, registration, judging and event workflows.", stack: "Next.js / Node.js / Express / MongoDB / JWT", image: judgr, imageAlt: "Judgr hackathon management platform", href: "https://yesjudgr.vercel.app/" },
  { number: "05", title: "Handmade Art", category: "Full-stack · E-commerce", description: "An online shop for handmade art, with product management, protected admin workflows, image hosting and AI-assisted product copy.", stack: "Next.js / React / Node.js / MongoDB / Cloudinary", image: handmadeArt, imageAlt: "Handmade Art e-commerce platform", href: "https://handmade-art.vercel.app/" },
];

function FeaturedProjects() {
  return (
    <section id="work" className="projects-section">
      <div className="site-shell">
        <div className="section-heading">
          <div><p className="eyebrow">A few things made with intent</p><h2 className="display-title">Selected<br/>work<span style={{ color: "var(--accent)" }}>.</span></h2></div>
          <p className="section-heading-note">A mix of client work and independent builds, spanning thoughtful interfaces and full-stack products.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => <article className="project-entry" key={project.number}>
            <div className="project-content">
              <div className="project-meta"><span className="project-number">{project.number}</span><span className="project-category">{project.category}</span></div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-tech">{project.stack}</p>
              <a className="text-link" href={project.href} target="_blank" rel="noopener noreferrer">View project <span>↗</span></a>
            </div>
            <a className="project-visual" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title}`}>
              <img src={project.image} alt={project.imageAlt} loading={project.number === "01" ? "eager" : "lazy"} />
              <span className="project-arrow" aria-hidden="true">↗</span>
            </a>
          </article>)}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, paddingTop: 28 }}>
          <p className="section-label" style={{ color: "var(--muted)" }}>More experiments, builds & details</p>
          <a className="pill-button" href="/projects">Explore all projects <span>↗</span></a>
        </div>
      </div>
    </section>
  );
}
export default FeaturedProjects;

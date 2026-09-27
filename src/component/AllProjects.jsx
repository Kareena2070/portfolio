import Navbar from "./navbar";
import FeaturedProjects from "./FeaturedProjects";
import ProjectSection from "./project";
import Contact from "./contact";

function AllProjects() {
  return (
    <>
      <Navbar />
      <main>
        <header className="site-shell" style={{ paddingBlock: "72px 10px" }}>
          <a className="text-link" href="/#work">← Back to home</a>
          <p className="eyebrow" style={{ marginTop: 56 }}>The complete collection</p>
          <h1 className="display-title" style={{ fontSize: "clamp(64px, 11vw, 145px)", margin: "18px 0 0" }}>All projects<span style={{ color: "var(--accent)" }}>.</span></h1>
          <p style={{ maxWidth: 480, color: "var(--muted)", lineHeight: 1.75, marginTop: 20 }}>Client work, experiments and products built across frontend and full-stack development.</p>
        </header>
        <FeaturedProjects />
        <ProjectSection />
      </main>
      <Contact />
    </>
  );
}
export default AllProjects;

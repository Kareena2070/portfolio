function HeroSection({ img }) {
  return (
    <section id="top" className="hero">
      <div className="site-shell">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Frontend & full-stack developer · Delhi, India</p>
            <h1 className="display-title hero-title"><span>Kareena</span><span className="outline-word">Yadav</span></h1>
          </div>
          <div className="hero-side">
            <div className="hero-photo-wrap">
              <img className="hero-photo" src={img} alt="Kareena Yadav" />
              <div className="hero-caption"><span>Developer</span><span>Available for opportunities</span></div>
            </div>
            <div>
              <p className="hero-copy">I build thoughtful digital experiences—from expressive interfaces to full-stack products made for the real world.</p>
              <div className="hero-actions">
                <a className="pill-button" href="#work">View my work <span>↘</span></a>
                <a className="pill-button pill-button--outline" href="#contact">Let’s connect <span>↗</span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bottom"><span>Independent mind · Collaborative by nature</span><a href="#about">Scroll to explore ↓</a></div>
      </div>
    </section>
  );
}
export default HeroSection;

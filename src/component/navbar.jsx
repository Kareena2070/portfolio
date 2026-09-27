import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Work", "/#work"],
    ["About", "/#about"],
    ["Experience", "/#experience"],
    ["Contact", "/#contact"],
  ];
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <div className="site-shell site-nav-inner">
        <a className="site-brand" href="/#top" aria-label="Kareena Yadav, home">KAREENA YADAV <span style={{ color: "var(--accent)" }}>/ KY</span></a>
        <button className="nav-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "×" : "☰"}</button>
        <div className={`nav-links${open ? " is-open" : ""}`}>
          {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label.toUpperCase()}</a>)}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

import { useState, useEffect } from "react";
import "./Navbar.css";

const links = [
  { href: "#about",          label: "About" },
  { href: "#skills",         label: "Skills" },
  { href: "#experience",     label: "Experience" },
  { href: "#projects",       label: "Projects" },
  { href: "#research",       label: "Research" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact",        label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [active,   setActive]       = useState("");
  const [menuOpen, setMenuOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Highlight active section
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) setActive(s.id);
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#hero" className="navbar__logo">YG<span>.</span></a>

        {/* Desktop links */}
        <ul className="navbar__links">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`navbar__link ${active === href.slice(1) ? "navbar__link--active" : ""}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <ul className="navbar__mobile">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

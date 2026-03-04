import { certifications } from "../data/portfolioData";
import { useFadeIn } from "../hooks/useFadeIn";
import "./Certifications.css";

const ICONS = {
  network:  "🌐",
  design:   "🎨",
  code:     "💻",
  cert:     "📜",
  language: "📖",
};

export default function Certifications() {
  const ref = useFadeIn();
  return (
    <section id="certifications" className="section-dark">
      <div className="container" ref={ref}>
        <p className="section-label">06 — Certifications</p>
        <h2 className="section-title">Courses &amp; <em>Certificates</em></h2>

        <div className="certs__grid">
          {certifications.map(({ name, issuer, icon }) => (
            <div className="cert__card fade-in" key={name}>
              <span className="cert__icon">{ICONS[icon] || "📜"}</span>
              <div>
                <p className="cert__name">{name}</p>
                <p className="cert__issuer">{issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

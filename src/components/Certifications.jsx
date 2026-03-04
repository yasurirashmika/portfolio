import { certifications } from "../data/portfolioData";
import { useFadeIn } from "../hooks/useFadeIn";
import "./Certifications.css";

const ICONS = {
  network: "🌐",
  design: "🎨",
  code: "💻",
  cert: "📜",
  language: "📖",
};

const PLATFORM_ORDER = [
  "Meta — Coursera",
  "Board Infinity — Coursera",
  "Google — Coursera",
  "HackerRank",
  "Great Learning",
  "Open University of Sri Lanka",
  "University of Sri Jayewardenepura",
];

const PLATFORM_LABELS = {
  "Meta — Coursera": { label: "Coursera", color: "#0056D2" },
  "Board Infinity — Coursera": { label: "Coursera", color: "#0056D2" },
  "Google — Coursera": { label: "Coursera", color: "#0056D2" },
  HackerRank: { label: "HackerRank", color: "#2EC866" },
  "Great Learning": { label: "Great Learning", color: "#E8412A" },
  "Open University of Sri Lanka": { label: "OUSL", color: "#7c6af7" },
  "University of Sri Jayewardenepura": { label: "USJ", color: "#7c6af7" },
};

export default function Certifications() {
  const ref = useFadeIn();
  return (
    <section id="certifications" className="section-dark">
      <div className="container" ref={ref}>
        <p className="section-label">06 — Certifications</p>
        <h2 className="section-title">
          Courses &amp; <em>Certificates</em>
        </h2>

        <div className="certs__grid">
          {certifications.map(({ name, issuer, icon, link }) => {
            const platform = PLATFORM_LABELS[issuer];
            const card = (
              <div
                className={`cert__card fade-in ${link ? "cert__card--linked" : ""}`}
                key={name}
              >
                <div className="cert__top">
                  {platform ? (
                    <span
                      className="cert__platform"
                      style={{
                        background: platform.color + "22",
                        color: platform.color,
                        border: `1px solid ${platform.color}44`,
                      }}
                    >
                      {platform.label}
                    </span>
                  ) : (
                    <span />
                  )}
                  {link && <span className="cert__arrow">↗</span>}
                </div>
                <div className="cert__main">
                  <span className="cert__icon">{ICONS[icon] || "📜"}</span>
                  <div className="cert__body">
                    <p className="cert__name">{name}</p>
                    <p className="cert__issuer">{issuer}</p>
                  </div>
                </div>
              </div>
            );
            return link ? (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="cert__link-wrap"
                key={name}
              >
                {card}
              </a>
            ) : (
              <div key={name}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

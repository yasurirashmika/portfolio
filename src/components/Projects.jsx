import { useState } from "react";
import { projects } from "../data/portfolioData";
import { useFadeIn } from "../hooks/useFadeIn";
import "./Projects.css";

const BADGE_COLORS = {
  "Research":   "badge--research",
  "AI/ML":      "badge--ai",
  "Full Stack": "badge--fullstack",
  "Backend":    "badge--backend",
  "Frontend":   "badge--frontend",
  "Middleware": "badge--middleware",
  "Compiler":   "badge--compiler",
  "Desktop":    "badge--desktop",
};

function ProjectGallery({ images, title }) {
  const [current, setCurrent] = useState(0);
  if (!images || images.length === 0) return null;

  return (
    <div className="proj__gallery">
      <div className="proj__gallery-main">
        <img src={images[current]} alt={`${title} screenshot ${current + 1}`} />
        {images.length > 1 && (
          <>
            <button className="proj__gallery-arrow left" onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}>‹</button>
            <button className="proj__gallery-arrow right" onClick={() => setCurrent((c) => (c + 1) % images.length)}>›</button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="proj__gallery-thumbs">
          {images.map((img, i) => (
            <img key={i} src={img} alt="" className={i === current ? "active" : ""} onClick={() => setCurrent(i)} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const ref = useFadeIn();
  return (
    <section id="projects" className="section-dark">
      <div className="container" ref={ref}>
        <p className="section-label">04 — Projects</p>
        <h2 className="section-title">Things I've <em>Built</em></h2>

        <div className="projects__grid">
          {projects.map((project) => (
            <article className="proj__card fade-in" key={project.id}>
              {/* Top accent line on hover */}
              <div className="proj__accent-line" />

              {/* Images (if any) */}
              <ProjectGallery images={project.images} title={project.title} />

              {/* Badge + title */}
              <span className={`proj__badge ${BADGE_COLORS[project.badge] || ""}`}>
                {project.badge}
              </span>
              <h3 className="proj__title">{project.title}</h3>
              <p className="proj__desc">{project.description}</p>

              {/* Tech tags */}
              <div className="proj__tags">
                {project.tech.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>

              {/* GitHub links */}
              <div className="proj__links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="proj__link">
                    <GitHubIcon /> GitHub
                  </a>
                )}
                {project.githubBackend && (
                  <a href={project.githubBackend} target="_blank" rel="noreferrer" className="proj__link">
                    <GitHubIcon /> Backend
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

import { useState } from "react";
import { useEffect } from "react";
import { projects } from "../data/portfolioData";
import { useFadeIn } from "../hooks/useFadeIn";
import "./Projects.css";
import { createPortal } from "react-dom";

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

// ── Video Modal ───────────────────────────────────────────────────────
function VideoModal({ loomId, title, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="video-modal__overlay" onClick={onClose}>
      <div className="video-modal__box" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal__close" onClick={onClose}>✕</button>
        <div className="video-modal__embed">
          <iframe
            src={`https://www.loom.com/embed/${loomId}?autoplay=1&hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true`}
            title={`${title} demo`}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

// ── Watch Demo button ─────────────────────────────────────────────────
function DemoButton({ loomId, title }) {
  const [open, setOpen] = useState(false);
  if (!loomId) return null;
  return (
    <>
      <button className="proj__demo-btn" onClick={() => setOpen(true)}>
        <PlayIcon /> Watch Demo
      </button>
      {open && <VideoModal loomId={loomId} title={title} onClose={() => setOpen(false)} />}
    </>
  );
}

// ── Image gallery with arrows, thumbnails, counter, caption ──────────
function ProjectGallery({ images, labels, title }) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  if (!images || images.length === 0) return null;

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <>
      <div className="proj__gallery">
        {/* Main image */}
        <div
          className="proj__gallery-main"
          data-current={current + 1}
          data-total={images.length}
        >
          <img
            src={images[current]}
            alt={labels?.[current] || `${title} screenshot ${current + 1}`}
            className="proj__gallery-img"
            onClick={() => setLightbox(true)}
            title="Click to enlarge"
          />
          {images.length > 1 && (
            <>
              <button className="proj__gallery-arrow left" onClick={prev}>‹</button>
              <button className="proj__gallery-arrow right" onClick={next}>›</button>
            </>
          )}
        </div>

        {/* Caption label */}
        {labels?.[current] && (
          <p className="proj__gallery-caption">{labels[current]}</p>
        )}

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="proj__gallery-thumbs">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={labels?.[i] || `${title} ${i + 1}`}
                className={i === current ? "active" : ""}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox — rendered via portal to escape card DOM */}
      {lightbox && createPortal(
        <div className="proj__lightbox" onClick={() => setLightbox(false)}>
          <div className="proj__lightbox-box" onClick={(e) => e.stopPropagation()}>
            <button className="proj__lightbox-close" onClick={() => setLightbox(false)}>✕</button>
            <img src={images[current]} alt={labels?.[current] || title} />
            {labels?.[current] && (
              <p className="proj__lightbox-caption">{labels[current]}</p>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

// ── Project card ──────────────────────────────────────────────────────
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
              <div className="proj__accent-line" />

              <span className={`proj__badge ${BADGE_COLORS[project.badge] || ""}`}>
                {project.badge}
              </span>
              <h3 className="proj__title">{project.title}</h3>

              {/* Image gallery — all projects use this now */}
              <ProjectGallery
                images={project.images}
                labels={project.imageLabels}
                title={project.title}
              />
              <p className="proj__desc">{project.description}</p>

              <div className="proj__tags">
                {project.tech.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>

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
                <DemoButton loomId={project.loomId} title={project.title} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlayIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
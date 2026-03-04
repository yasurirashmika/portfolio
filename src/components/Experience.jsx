import { useState } from "react";
import { experience } from "../data/portfolioData";
import { useFadeIn } from "../hooks/useFadeIn";
import "./Experience.css";

function ImageGallery({ images, title }) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="gallery">
      <div className="gallery__main">
        <img src={images[current]} alt={`${title} — image ${current + 1}`} />
        {images.length > 1 && (
          <>
            <button className="gallery__arrow gallery__arrow--prev" onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}>‹</button>
            <button className="gallery__arrow gallery__arrow--next" onClick={() => setCurrent((c) => (c + 1) % images.length)}>›</button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="gallery__thumbs">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`thumb ${i + 1}`}
              className={`gallery__thumb ${i === current ? "gallery__thumb--active" : ""}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ImagePlaceholder() {
  return (
    <div className="exp__image-placeholder">
      <span className="exp__image-hint">// Add images in portfolioData.js → experience[].images</span>
      <span>Place image files in <code>src/assets/images/internship/</code></span>
    </div>
  );
}

export default function Experience() {
  const ref = useFadeIn();
  return (
    <section id="experience" className="section-raised">
      <div className="container" ref={ref}>
        <p className="section-label">03 — Experience</p>
        <h2 className="section-title">Professional <em>Journey</em></h2>

        <div className="exp__timeline">
          {experience.map((item, i) => (
            <div className="exp__item" key={i}>
              {/* Timeline dot */}
              <div className={`exp__dot ${item.type === "secondary" ? "exp__dot--secondary" : ""}`} />

              {/* Card */}
              <div className="exp__card fade-in">
                <div className="exp__header">
                  <div>
                    <h3 className="exp__role">{item.role}</h3>
                    <p className="exp__company">{item.company} · {item.location}</p>
                  </div>
                  <span className="exp__date">{item.period}</span>
                </div>

                <p className="exp__desc">{item.description}</p>

                {item.tech.length > 0 && (
                  <div className="exp__tech">
                    {item.tech.map((t) => (
                      <span className="exp__tech-tag" key={t}>{t}</span>
                    ))}
                  </div>
                )}

                {/* Images / gallery */}
                {item.images && item.images.length > 0
                  ? <ImageGallery images={item.images} title={item.role} />
                  : item.type === "primary" && <ImagePlaceholder />
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

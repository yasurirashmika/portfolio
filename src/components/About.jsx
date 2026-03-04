import { about, personal } from "../data/portfolioData";
import { useFadeIn } from "../hooks/useFadeIn";
import "./About.css";

export default function About() {
  const ref = useFadeIn();

  return (
    <section id="about" className="section-raised">
      <div className="container" ref={ref}>
        <p className="section-label">01 — About</p>
        <h2 className="section-title">Who I <em>Am</em></h2>

        <div className="about__grid">
          {/* Bio */}
          <div className="about__bio">
            {about.bio.map((para, i) => (
              <p key={i} className="about__para fade-in">{para}</p>
            ))}
          </div>

          {/* Info cards */}
          <div className="about__cards">
            {about.education.map((edu, i) => (
              <div className="about__card fade-in" key={i}>
                <span className="about__card-label">
                  {i === 0 ? "Education" : "A-Levels"}
                </span>
                <strong className="about__card-value">{edu.degree}</strong>
                <span className="about__card-sub">{edu.institution}</span>
                {edu.department && (
                  <span className="about__card-sub">{edu.department}</span>
                )}
                <span className="about__card-sub">{edu.period}</span>
                {edu.gpa && (
                  <span className="about__card-gpa">GPA: {edu.gpa}</span>
                )}
              </div>
            ))}

            <div className="about__card fade-in">
              <span className="about__card-label">Location</span>
              <strong className="about__card-value">{personal.location}</strong>
              <span className="about__card-sub">Open to remote &amp; on-site opportunities</span>
            </div>

            <div className="about__card fade-in">
              <span className="about__card-label">Contact</span>
              <strong className="about__card-value">{personal.email}</strong>
              <span className="about__card-sub">{personal.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

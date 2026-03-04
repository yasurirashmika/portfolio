import { personal, stats } from "../data/portfolioData";
import profile from "../assets/images/profile.jpg";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Background glow blobs */}
      <div className="hero__glow hero__glow--purple" />
      <div className="hero__glow hero__glow--teal"   />

      <div className="container hero__content">
        
        {/* LEFT COLUMN: Text & Stats */}
        <div className="hero__text-column">
          <p className="hero__label">Full Stack Developer · BSc (Hons) Computer Science</p>

          <h1 className="hero__name">
            {personal.name.split(" ")[0]}
            <br />
            <em>{personal.name.split(" ")[1]}</em>
          </h1>

          <p className="hero__tagline">{personal.tagline}</p>

          <div className="hero__ctas">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact"  className="btn btn-outline">Get in Touch</a>
            <a href={personal.github} target="_blank" rel="noreferrer" className="btn btn-outline">
              GitHub ↗
            </a>
          </div>

          <div className="hero__stats">
            {stats.map(({ value, label }) => (
              <div className="hero__stat" key={label}>
                <span className="hero__stat-value">{value}</span>
                <span className="hero__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Profile Photo */}
        <div className="hero__image-column">
          <div className="hero__image-wrapper">
            <img src={profile} alt={personal.name} className="hero__profile-img" />
          </div>
        </div>

      </div>
    </section>
  );
}
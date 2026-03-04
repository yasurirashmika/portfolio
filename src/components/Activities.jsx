import { activities } from "../data/portfolioData";
import { useFadeIn } from "../hooks/useFadeIn";
import "./Activities.css";

export default function Activities() {
  const ref = useFadeIn();
  return (
    <section id="activities" className="section-raised">
      <div className="container" ref={ref}>
        <p className="section-label">07 — Beyond Code</p>
        <h2 className="section-title">Life <em>Outside</em> Work</h2>

        <div className="activities__grid">
          {activities.map(({ title, detail, icon }) => (
            <div className="activity__card fade-in" key={title}>
              <span className="activity__icon">{icon}</span>
              <div>
                <h3 className="activity__title">{title}</h3>
                <p className="activity__detail">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

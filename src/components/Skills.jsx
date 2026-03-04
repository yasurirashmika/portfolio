import { skills } from "../data/portfolioData";
import { useFadeIn } from "../hooks/useFadeIn";
import "./Skills.css";

export default function Skills() {
  const ref = useFadeIn();
  return (
    <section id="skills" className="section-dark">
      <div className="container" ref={ref}>
        <p className="section-label">02 — Skills</p>
        <h2 className="section-title">Technical <em>Stack</em></h2>

        <div className="skills__grid">
          {skills.map(({ category, tags }) => (
            <div className="skills__card fade-in" key={category}>
              <h3 className="skills__category">{category}</h3>
              <div className="skills__tags">
                {tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>  {/* container */}
    </section>
  );
}

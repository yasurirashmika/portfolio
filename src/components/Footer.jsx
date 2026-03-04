import { personal } from "../data/portfolioData";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© 2026 {personal.name} · Built with React &amp; ♥</p>
        <p className="footer__location">{personal.location}</p>
      </div>
    </footer>
  );
}

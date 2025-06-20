import { Link } from "react-router";
import "../../style/components/cards/programsCards.css";
export default function programsCard({ img, title, desc }) {
  return (
    <div className="program-card">
      <div className="main-img">
        <img src={img} alt="Not Found" />
      </div>
      <div className="main-desc">
        <h3>{title}</h3>
        <p>{desc}</p>
        <Link to={"/programs"}>التفاصيل</Link>
      </div>
    </div>
  );
}

import { Link } from "react-router";
import "../../style/components/cards/programsCards.css";
export default function programsCard({ img, title, desc }) {
  return (
    <div className="program-card card">
      <div className="main-img">
        <img src={img} alt="Not Found" />
      </div>
      <div className="main-desc">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
      <Link to={"/programs"}>التفاصيل</Link>
    </div>
  );
}

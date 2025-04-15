import { Link } from "react-router";
import "../style/components/join.css";
export default function Join({ title, desc }) {
  return (
    <div className="join">
      <h2>{title}</h2>
      <p>{desc}</p>
      <div className="join-btns">
        <Link to="/programs">سجل الأن</Link>
        <Link to="/contact">تواصل معنا</Link>
      </div>
    </div>
  );
}

import { Link } from "react-router";
import "../../style/components/cards/MainProgramsCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
export default function MainProgramsCard({
  icon,
  title,
  desc,
  advantagesList,
}) {
  const phoneNumber = "201117493384";
  const encodeMessage = encodeURIComponent(
    ` السلام عليكم ورحمة الله وبركاته \n  أريد الإستعلام عن تفاصيل  ${title} \n وأريد معرفة طريقة الدفع `
  );
  const whatsAppURL = `https://wa.me/${phoneNumber}?text=${encodeMessage}`;
  const advantages = advantagesList.map((advantage, i) => (
    <li key={i}>
      <FontAwesomeIcon className="checked" icon={faCircleCheck} />
      <p>{advantage}</p>
    </li>
  ));
  return (
    <div className="main-program-card ">
      <div className="card-title">
        <FontAwesomeIcon className="icon" icon={icon} />
        <h5>{title}</h5>
        <p>{desc}</p>
      </div>
      <div className="advantages">
        <ul className="advantages-list">{advantages}</ul>
        <Link className="btn" to={whatsAppURL} target="_blank">
          سجل الأن
        </Link>
      </div>
    </div>
  );
}

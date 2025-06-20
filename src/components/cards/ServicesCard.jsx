import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../style/components/cards/servicesCard.css";
export default function ServicesCard({ icon, title, desc }) {
  return (
    <div className="service-card card">
      <FontAwesomeIcon icon={icon} className="icon" />
      <h5>{title}</h5>
      <p>{desc}</p>
    </div>
  );
}

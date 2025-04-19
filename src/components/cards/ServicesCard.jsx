import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../style/components/cards/servicesCard.css";
export default function ServicesCard({ icon, title, desc }) {
  return (
    <div className="service-card card">
      <FontAwesomeIcon icon={icon} className="icon" />
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

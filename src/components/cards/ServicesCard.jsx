import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../style/components/cards/servicesCard.css";
export default function ServicesCard({ icon, title, desc }) {
  return (
    <div className="service-card">
      <FontAwesomeIcon icon={icon} className="icon" />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

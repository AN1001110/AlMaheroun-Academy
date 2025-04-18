import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../style/components/cards/commentCard.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";
export default function CommentCard({ name, comment }) {
  return (
    <div className="comment-card card">
      <FontAwesomeIcon icon={faUser} className="icon" />
      <h3>{name}</h3>
      <p>{comment}</p>
    </div>
  );
}

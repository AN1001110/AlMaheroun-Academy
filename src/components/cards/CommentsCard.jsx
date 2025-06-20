import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../style/components/cards/commentCard.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";
export default function CommentCard({ name, comment }) {
  return (
    <div className="comment-card card">
      <div className="title">
        <FontAwesomeIcon icon={faUser} className="icon" />
        <h5>{name}</h5>
      </div>
      <p>{comment}</p>
    </div>
  );
}

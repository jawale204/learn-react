import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";

function FeedbackItem(props) {
  return (
    <Card reverse={false}>
      <div className="num-display">{props.item.rating}</div>
      <div className="close">
        <FaTimes
          onClick={() => props.handleDelete(props.item.id)}
          color="purple"
        />
      </div>
      <div className="text-display">{props.item.text}</div>
    </Card>
  );
}

export default FeedbackItem;

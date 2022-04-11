import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem(props) {
  const { handleDelete } = useContext(FeedbackContext);
  return (
    <Card reverse={false}>
      <div className="num-display">{props.item.rating}</div>
      <div className="close">
        <FaTimes onClick={() => handleDelete(props.item.id)} color="purple" />
      </div>
      <div className="text-display">{props.item.text}</div>
    </Card>
  );
}

export default FeedbackItem;

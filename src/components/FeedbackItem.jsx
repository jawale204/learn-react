import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem(props) {
  const { handleDelete, handleEditItem } = useContext(FeedbackContext);
  return (
    <Card reverse={false}>
      <div className="num-display">{props.item.rating}</div>
      <div className="close">
        <FaTimes onClick={() => handleDelete(props.item.id)} color="purple" />
      </div>
      <div className="edit">
        <FaEdit color="purple" onClick={() => handleEditItem(props.item)} />
      </div>
      <div className="text-display">{props.item.text}</div>
    </Card>
  );
}

export default FeedbackItem;

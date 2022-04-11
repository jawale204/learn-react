import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedbacks } = useContext(FeedbackContext);
  var sum = 0;
  feedbacks.forEach((item) => (sum = sum + item.rating));
  const avg = (sum / feedbacks.length).toFixed(1);
  return (
    <div className="feedback-stats">
      <h3>comments ({feedbacks.length}) </h3>
      <h3>Avg Rating {isNaN(avg) ? 0 : avg}</h3>
    </div>
  );
}

export default FeedbackStats;

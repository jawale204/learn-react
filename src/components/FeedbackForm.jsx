import { useState } from "react";
import Card from "./shared/Card";
function FeedbackForm() {
  const [review, setReview] = useState("");
  const handleTextChange = (e) => {
    setReview(e.target.value);
  };
  return (
    <Card>
      <h4>How do you review your service</h4>
      <div className="input-group">
        <input
          type="text"
          placeholder="write a review"
          onChange={handleTextChange}
        />
        <button type="submit"> Submit </button>
      </div>
    </Card>
  );
}

export default FeedbackForm;

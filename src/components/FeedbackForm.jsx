import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
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
        <Button type="submit" isDisabled={false} version="primary">
          Submit
        </Button>
      </div>
    </Card>
  );
}

export default FeedbackForm;
import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
function FeedbackForm() {
  const [review, setReview] = useState("");
  const [message, setMessage] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const handleTextChange = (e) => {
    console.log(e.target.value, e.target.value.length);
    if (e.target.value === "") {
      setMessage(false);
      setDisabled(false);
    }
    if (e.target.value !== "" && e.target.value.trim().length < 10) {
      setMessage(true);
      setDisabled(true);
    } else {
      setMessage(false);
      setDisabled(false);
    }
    setReview(e.target.value.trim());
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
        <Button type="submit" isDisabled={disabled} version="primary">
          Submit
        </Button>
      </div>
      {message && (
        <div className="message">Text must be atleast 10 in length</div>
      )}
    </Card>
  );
}

export default FeedbackForm;

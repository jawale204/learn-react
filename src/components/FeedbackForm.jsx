import { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const [review, setReview] = useState("");
  const [message, setMessage] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [rating, setRating] = useState(10);

  const { handleSubmit, editFeedbackItem, handleUpdate } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (editFeedbackItem.edit) {
      setDisabled(false);
      setReview(editFeedbackItem.item.text);
      setRating(editFeedbackItem.item.rating);
    }
  }, [editFeedbackItem]);

  const handleTextChange = (e) => {
    if (e.target.value === "") {
      setMessage(false);
      setDisabled(true);
    } else if (e.target.value !== "" && e.target.value.trim().length < 10) {
      setMessage(true);
      setDisabled(true);
    } else {
      setMessage(false);
      setDisabled(false);
    }
    setReview(e.target.value);
  };

  const handleSelectedrating = (value) => {
    setRating(value);
  };

  const handleSubmitF = (e) => {
    e.preventDefault();
    if (review.trim().length >= 10) {
      const newFeedback = {
        text: review,
        rating,
      };

      if (editFeedbackItem.edit === true) {
        handleUpdate(editFeedbackItem.item.id, newFeedback);
      } else {
        handleSubmit(newFeedback);
      }
    }

    setReview("");
    setDisabled(true);
  };

  return (
    <Card>
      <form onSubmit={handleSubmitF}>
        <h4>How do you review your service</h4>
        <RatingSelect select={handleSelectedrating} />
        <div className="input-group">
          <input
            type="text"
            placeholder="write a review"
            onChange={handleTextChange}
            value={review}
          />
          <Button type="submit" isDisabled={disabled} version="primary">
            Submit
          </Button>
        </div>
        {message && (
          <div className="message">Text must be atleast 10 in length</div>
        )}
      </form>
    </Card>
  );
}

export default FeedbackForm;

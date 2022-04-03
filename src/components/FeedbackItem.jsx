import { useState } from "react";

function FeedbackItem() {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState("default feedback");
  const handleClick = () => {
    setRating((prev) => {
      return prev + 1;
    });
    setText((prev) => {
      return prev + "sing is king";
    });
  };
  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <button
        onClick={handleClick}
        style={{
          color: "blue",
          height: 30,
          maxWidth: 400,
          margin: 10,
        }}
      >
        change Feedback
      </button>
    </div>
  );
}

export default FeedbackItem;

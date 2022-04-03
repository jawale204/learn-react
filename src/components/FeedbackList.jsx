import React from "react";
import FeedBackItem from "./FeedbackItem";

function FeedbackList(props) {
  return (
    <div>
      {props.feedbacks.map((item) => {
        return <FeedBackItem item={item} />;
      })}
    </div>
  );
}

export default FeedbackList;

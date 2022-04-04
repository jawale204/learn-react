import React from "react";
import FeedBackItem from "./FeedbackItem";
import PropTypes from "prop-types";

function FeedbackList(props) {
  if (!props.feedbacks || props.feedbacks.length === 0) return <>No feedback</>;
  return (
    <div>
      {props.feedbacks.map((item) => {
        return (
          <FeedBackItem
            key={item.id}
            item={item}
            handleDelete={props.handleDelete}
          />
        );
      })}
    </div>
  );
}

FeedbackList.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      rating: PropTypes.number,
    })
  ),
};

export default FeedbackList;

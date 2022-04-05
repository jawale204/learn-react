import PropTypes from "prop-types";

function FeedbackStats(props) {
  var sum = 0;
  props.feedbacks.forEach((item) => (sum = sum + item.rating));
  const avg = (sum / props.feedbacks.length).toFixed(1);
  return (
    <div className="feedback-stats">
      <h3>comments ({props.feedbacks.length}) </h3>
      <h3>Avg Rating {isNaN(avg) ? 0 : avg}</h3>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      rating: PropTypes.number,
    })
  ),
};

export default FeedbackStats;
import React from "react";
import FeedBackItem from "./FeedbackItem";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

function FeedbackList(props) {
  if (!props.feedbacks || props.feedbacks.length === 0) return <>No feedback</>;
  return (
    <div>
      <AnimatePresence>
        {props.feedbacks.map((item) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={item.id}
            >
              <FeedBackItem
                key={item.id}
                item={item}
                handleDelete={props.handleDelete}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

FeedbackList.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      rating: PropTypes.number,
    })
  ),
};

export default FeedbackList;

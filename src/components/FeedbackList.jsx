import React from "react";
import FeedBackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./Spinner";

function FeedbackList() {
  const { feedbacks, isLoading } = useContext(FeedbackContext);
  if (!isLoading && (!feedbacks || feedbacks.length === 0))
    return <>No feedback</>;
  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <AnimatePresence>
        {feedbacks.map((item) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={item.id}
            >
              <FeedBackItem key={item.id} item={item} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;

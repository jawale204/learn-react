import { createContext, useEffect, useState } from "react";
import { v4 as uuid4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([]);

  const [editFeedbackItem, setEditFeedbackItem] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedbackData();
  }, []);

  const fetchFeedbackData = async () => {
    const feedback = await fetch("/feedback");
    const data = await feedback.json();
    setFeedbacks(data);
  };

  const handleSubmit = (newFeedback) => {
    newFeedback.id = uuid4();
    setFeedbacks([newFeedback, ...feedbacks]);
  };

  const handleDelete = (id) => {
    setFeedbacks(
      feedbacks.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const handleUpdate = (id, feedback) => {
    setFeedbacks(
      feedbacks.map((item) => (item.id === id ? { id, ...feedback } : item))
    );

    setEditFeedbackItem({
      item: {},
      edit: false,
    });
  };

  const handleEditItem = (item) => {
    setEditFeedbackItem({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        editFeedbackItem,
        handleSubmit,
        handleDelete,
        handleEditItem,
        handleUpdate,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

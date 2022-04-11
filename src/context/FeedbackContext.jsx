import { createContext, useState } from "react";
import { v4 as uuid4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      text: "this review is from the context provider 1",
      rating: 10,
    },
    {
      id: 2,
      text: "this review is from the context provider 2",
      rating: 9,
    },
    {
      id: 3,
      text: "this review is from the context provider 3",
      rating: 7,
    },
  ]);

  const [editFeedbackItem, setEditFeedbackItem] = useState({
    item: {},
    edit: false,
  });

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

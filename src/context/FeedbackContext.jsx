import { createContext, useEffect, useState } from "react";

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
    const feedback = await fetch("/feedback?_sort=id&_order=desc");
    const data = await feedback.json();
    setFeedbacks(data);
  };

  const handleSubmit = async (newFeedback) => {
    const feedback = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await feedback.json();
    setFeedbacks([data, ...feedbacks]);
  };

  const handleDelete = async (id) => {
    await fetch(`/feedback/${id}`, { method: "DELETE" });
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

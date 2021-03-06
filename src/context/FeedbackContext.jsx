import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(false);
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

  const handleUpdate = async (id, feedback) => {
    const feedbackres = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedback),
    });

    const data = await feedbackres.json();

    setFeedbacks(
      feedbacks.map((item) => (item.id === id ? { id, ...data } : item))
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
        isLoading,
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

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackItemList from "./data/FeedbackItemList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuid4 } from "uuid";
function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackItemList);

  const handleDelete = (id) => {
    setFeedbacks(
      feedbacks.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const handleSubmit = (newFeedback) => {
    newFeedback.id = uuid4();
    setFeedbacks([newFeedback, ...feedbacks]);
  };
  return (
    <>
      <Header text="feedback UI" />
      <div className="container">
        <FeedbackForm handleSubmit={handleSubmit} />
        <FeedbackStats feedbacks={feedbacks} />
        <FeedbackList
          feedbacks={feedbacks}
          handleDelete={handleDelete}
        ></FeedbackList>
      </div>
    </>
  );
}

export default App;

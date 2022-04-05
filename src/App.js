import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackItemList from "./data/FeedbackItemList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackItemList);

  const handleDelete = (id) => {
    setFeedbacks(
      feedbacks.filter((item) => {
        return item.id !== id;
      })
    );
  };
  return (
    <>
      <Header text="feedback UI" />
      <div className="container">
        <FeedbackForm />
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

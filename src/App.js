import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackItemList from "./data/FeedbackItemList";

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
        <FeedbackList
          feedbacks={feedbacks}
          handleDelete={handleDelete}
        ></FeedbackList>
      </div>
    </>
  );
}

export default App;

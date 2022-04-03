import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackItemList from "./data/FeedbackItemList";

function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackItemList);
  return (
    <>
      <Header text="feedback UI" />
      <div className="container">
        <FeedbackList feedbacks={feedbacks} />
      </div>
    </>
  );
}

export default App;

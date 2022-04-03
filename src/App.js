import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

function App() {
  return (
    <>
      <Header text="feedback UI" />
      <div className="container">
        <FeedbackItem />
      </div>
    </>
  );
}

export default App;

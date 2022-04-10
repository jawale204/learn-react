import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackItemList from "./data/FeedbackItemList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuid4 } from "uuid";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import About from "./pages/About";
import AboutLink from "./components/AboutLink";
import Card from "./components/shared/Card";

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
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm handleSubmit={handleSubmit} />
                  <FeedbackStats feedbacks={feedbacks} />
                  <FeedbackList
                    feedbacks={feedbacks}
                    handleDelete={handleDelete}
                  ></FeedbackList>
                </>
              }
            ></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
          <Card>
            <NavLink
              to={{
                pathname: "/",
              }}
              activeclassname="active"
            >
              Home
            </NavLink>
            <br></br>
            <NavLink
              to={{
                pathname: "/about",
              }}
            >
              About
            </NavLink>
          </Card>

          <AboutLink />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

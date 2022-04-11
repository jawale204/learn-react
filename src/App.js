import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import AboutLink from "./components/AboutLink";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <>
      <FeedbackProvider>
        <Header text="feedback UI" />
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList></FeedbackList>
                  </>
                }
              ></Route>
              <Route path="/about" element={<About />}></Route>
            </Routes>
            <AboutLink />
          </BrowserRouter>
        </div>
      </FeedbackProvider>
    </>
  );
}

export default App;

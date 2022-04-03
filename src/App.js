import Header from "./components/Header";

function App() {
  const style = {
    backgroundColor: "white",
    color: "black",
  };
  return (
    <>
      <Header text="feedback UI" style={style} />
      <div className="container">
        <h1>My blog</h1>
      </div>
    </>
  );
}

export default App;

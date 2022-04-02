function App() {
  const comments = [
    { id: 1, text: "nice videos" },
    { id: 2, text: "keep it up" },
    { id: 3, text: "kinda fucked up" },
  ];
  const body =
    "this is my first blog post and i am really glad to start this journey";
  const title = "By Blog";
  return (
    <div className="container">
      <h1>{title}</h1>
      <h3>{body}</h3>
      <div className="Comments">
        <h3>Comments ({comments.length})</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

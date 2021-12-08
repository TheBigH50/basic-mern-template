import React from "react";

const App = () => {
  const [message, setMessage] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/test")
      .then((res) => res.text())
      .then((message) => setMessage(message))
      .catch((err) => alert("Failed to fetch test"));
  }, []);

  return (
    <main className="container">
      <div>
        <h1>{message}</h1>
      </div>
    </main>
  );
};

export default App;

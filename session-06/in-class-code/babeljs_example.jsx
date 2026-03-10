// In JSX
const App = () => {
  const greeting = "Develop. Preview. Ship.";

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1 style={{ color: "#61dafb" }}>{greeting}</h1>
      <p>Compiled by Babel in real-time →</p>
      <button onClick={() => alert("Ship it!")}>Click me!</button>
    </div>
  );
};

// Render
const root = document.getElementById("root");
// In a real React app you'd use ReactDOM.createRoot
// Babel transforms the JSX above; this just mounts it manually
root.appendChild(React.createElement(App));

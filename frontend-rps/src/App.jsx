import { useState } from "react";
import axios from "axios";

function App() {
  const [result, setResult] = useState(null);

  const play = async (choice) => {
    const res = await axios.post("http://localhost:5000/play", {
      choice,
    });
    setResult(res.data);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Rock Paper Scissors</h1>

      <button onClick={() => play("rock")}>Rock</button>
      <button onClick={() => play("paper")}>Paper</button>
      <button onClick={() => play("scissors")}>Scissors</button>

      {result && (
        <div>
          <p>You: {result.userChoice}</p>
          <p>Computer: {result.computerChoice}</p>
          <h2>Winner: {result.winner}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
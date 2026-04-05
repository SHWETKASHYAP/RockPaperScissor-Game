import { useState } from "react";
import axios from "axios";
import rockImg from "./assets/rock.png";
import paperImg from "./assets/paper.png";
import scissorsImg from "./assets/scissors.png";

function App() {
  const [result, setResult] = useState(null);
  const [selected, setSelected] = useState(null);

  const images = {
    rock: rockImg,
    paper: paperImg,
    scissors: scissorsImg,
  };

  const play = async (choice) => {
    setSelected(choice);
    try {
      const res = await axios.post("http://localhost:5000/play", {
        choice,
      });
      setResult(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Rock Paper Scissors</h1>

      <div style={styles.grid}>
        {["rock", "paper", "scissors"].map((item) => (
          <div
            key={item}
            style={{
              ...styles.card,
              border:
                selected === item ? "3px solid #00ffcc" : "3px solid transparent",
            }}
            onClick={() => play(item)}
          >
            <img src={images[item]} alt={item} style={styles.image} />
            <p style={styles.label}>{item}</p>
          </div>
        ))}
      </div>

      {result && (
        <div style={styles.resultBox}>
          <p>You: {result.player}</p>
          <p>Computer: {result.computer}</p>
          <h2
            style={{
              color:
                result.result.includes("You") ? "#00ffcc" : "#ff4d4d",
            }}
          >
            {result.result}
          </h2>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "40px",
    color: "white",
    background: "#0f172a",
    minHeight: "100vh",
    padding: "20px",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "30px",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
  },
  card: {
    cursor: "pointer",
    padding: "15px",
    borderRadius: "15px",
    transition: "0.3s",
    background: "#1e293b",
  },
  image: {
    width: "100px",
  },
  label: {
    marginTop: "10px",
    textTransform: "capitalize",
  },
  resultBox: {
    marginTop: "40px",
    fontSize: "1.3rem",
  },
};

export default App;
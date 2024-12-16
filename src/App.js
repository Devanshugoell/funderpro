import "./App.css";
import Leaderboard from "../src/Leaderboard/Leaderboard";
import Header from "./Header/Header";
import Performance from "./Performance/Performance";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="FunderProComponents">
        <Leaderboard />
        <Performance />
      </div>
    </div>
  );
}

export default App;

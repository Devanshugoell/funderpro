import "./App.css";
import Leaderboard from "../src/Leaderboard/Leaderboard";
import Header from "./Header/Header";
import Performance from "./Performance/Performance";

function App() {
  return (
    <div className="App">
      <Header />
      <Leaderboard />
      <Performance />
    </div>
  );
}

export default App;

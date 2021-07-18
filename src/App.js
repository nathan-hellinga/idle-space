import './App.css';
import Main from "./Pages/main/main";
import GameManager from "./Components/gameManager";

function App() {
  return (
    <div style={{padding: '8px'}}>
      <GameManager/>
      <Main />
    </div>
  );
}

export default App;

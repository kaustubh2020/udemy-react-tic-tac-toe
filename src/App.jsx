import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

const App = () => {
  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players">
            <Player initialName="PLayer 1" symbol="X" />
            <Player initialName="PLayer 2" symbol="O" />
          </ol>
          <GameBoard />
        </div>
        LOG
      </main>
    </>
  );
};

export default App;

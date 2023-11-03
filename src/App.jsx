import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

const App = () => {
  const [activePlayer, setActivePlayer] = useState("X");

  const handleSelectSquare = () => {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "O" : "X"
    );
  };

  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              initialName="PLayer 1"
              symbol="X"
              isActive={activePlayer === "X"}
            />
            <Player
              initialName="PLayer 2"
              symbol="O"
              isActive={activePlayer === "O"}
            />
          </ol>
          <GameBoard
            onSelectSquare={handleSelectSquare}
            activePLayerSymbol={activePlayer}
          />
        </div>
        LOG
      </main>
    </>
  );
};

export default App;

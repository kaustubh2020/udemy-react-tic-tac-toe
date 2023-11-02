import Player from "./components/Player";

const App = () => {
  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players">
            <Player name={"PLayer 1"} symbol={"X"} />
            <Player name={"PLayer 2"} symbol={"O"} />
          </ol>
        </div>
      </main>
    </>
  );
};

export default App;

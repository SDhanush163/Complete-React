import GameBoard from "./components/GameBoard/GameBoard.jsx";
import Player from "./components/Player/Player.jsx";

function App() {
    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <Player initialName="player 1" symbol="X" />
                    <Player initialName="player 2" symbol="O" />
                </ol>
                <GameBoard />
            </div>
            log
        </main>
    );
}

export default App;

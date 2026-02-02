import { useState } from "react";
import GameBoard from "./components/GameBoard/GameBoard.jsx";
import Player from "./components/Player/Player.jsx";
import Log from "./components/Log/Log.jsx";

function App() {
    const [activePlayer, setActivePlayer] = useState("X");

    const handleSelectSquare = () => {
        setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
    };

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player
                        initialName="player 1"
                        symbol="X"
                        isActive={activePlayer === "X"}
                    />
                    <Player
                        initialName="player 2"
                        symbol="O"
                        isActive={activePlayer === "O"}
                    />
                </ol>
                <GameBoard
                    onSelectSquare={handleSelectSquare}
                    activePlayerSymbol={activePlayer}
                />
            </div>
            <Log />
        </main>
    );
}

export default App;

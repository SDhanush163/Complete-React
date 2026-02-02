import { useState } from "react";
import GameBoard from "./components/GameBoard/GameBoard.jsx";
import Player from "./components/Player/Player.jsx";
import Log from "./components/Log/Log.jsx";

const deriveActivePlayer = (gameTurns) => {
    let currentPlayer = "X";
    if (gameTurns.length > 0 && gameTurns[0].player === "X")
        currentPlayer = "O";

    return currentPlayer;
};

function App() {
    const [gameTurns, setGameTurns] = useState([]);
    const activePlayer = deriveActivePlayer(gameTurns);

    const handleSelectSquare = (rowIdx, colIdx) => {
        setGameTurns((prevTurns) => {
            const currentPlayer = deriveActivePlayer(prevTurns);
            const updatedTurns = [
                {
                    square: { row: rowIdx, col: colIdx },
                    player: currentPlayer,
                },
                ...prevTurns,
            ];
            return updatedTurns;
        });
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
                    turns={gameTurns}
                />
            </div>
            <Log turns={gameTurns} />
        </main>
    );
}

export default App;

import { useState } from "react";
import GameBoard from "./components/GameBoard/GameBoard.jsx";
import Player from "./components/Player/Player.jsx";
import Log from "./components/Log/Log.jsx";
import { WINNING_COMBINATIONS } from "./assets/winning-combinations.js";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") currentPlayer = "O";

  return currentPlayer;
};

const App = () => {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {
  }

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
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
};

export default App;

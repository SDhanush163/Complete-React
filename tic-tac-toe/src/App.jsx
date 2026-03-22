import { useState } from "react";
import GameBoard from "./components/GameBoard/GameBoard.jsx";
import Player from "./components/Player/Player.jsx";
import Log from "./components/Log/Log.jsx";
import { WINNING_COMBINATIONS } from "./assets/winning-combinations.js";
import GameOver from "./components/GameBoard/GameOver.jsx";

/* --------------------------------------------------------
Global components and handling some custom logic
  - PLAYERS > Initial player names for X and O
  - INITIAL_GAME_BOARD > Initial Game state

  - deriveActivePlayer > Change the current player between
      X and O each turn 
  - deriveGameBoard > Draw the game board with the updated 
      marker for the player based on the game turns array. 
      The array has objects that have the square that was 
      pressed and the player who played the turn 
  - deriveWinner > If gameboard gets into one of the winning
      combinations, the player who last played is the winner
-------------------------------------------------------- */

const PLAYERS = { X: "player 1", O: "player 2" };

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") currentPlayer = "O";

  return currentPlayer;
};

const deriveGameBoard = (gameTurns) => {
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
};

const deriveWinner = (gameBoard, players) => {
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
};

/* --------------------------------------------------------
App component - Main game logic
 - players > Handles both player 1 and 2
 - gameTurns > Keeps track of the game turns. Each element
      in the array is and object of the square that has 
      been played and who played it
 - activePlayer > Keeps track of the current player using 
      the helper function deriveActivePlayer
 - gameBoard > Keeps track of the game board and the current
      state of the game
 - winner > Each turn check for a winner
 - hasDraw > If 9 rounds have been played and no winner, 
      the game is a draw.

  - handleSelectSquare > When the button on the game board 
      corresponding to a square is clicked, this method will
      append the gameTurns state with the current active 
      player and the {row, col} of the square played and add 
      it to the top of the stack array.
  - handleRestart > Reset the game and clear the game turns
  - handlePlayerNameChange > Change the player name for the 
      symbol
-------------------------------------------------------- */

const App = () => {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  // Handling selecting a square
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

  const handleRestart = () => setGameTurns([]);
  const handlePlayerNameChange = (symbol, name) =>
    setPlayers((prev) => ({ ...prev, [symbol]: name }));

  // --------------------------------------------------------
  // Screen
  // --------------------------------------------------------
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        <button id="reset" onClick={handleRestart}>
          Reset
        </button>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} players={players} />
    </main>
  );
};

export default App;

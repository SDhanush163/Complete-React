import React from "react";

/* --------------------------------------------------------
Game over - The game is over if either user wins or the 
    board is filled. This component just renders the final
    screen based on the winner and pass restarting the game
-------------------------------------------------------- */
const GameOver = ({ winner, onRestart }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {!winner ? <p>It's a draw!</p> : <p>{winner.toUpperCase()} won!</p>}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
};

export default GameOver;

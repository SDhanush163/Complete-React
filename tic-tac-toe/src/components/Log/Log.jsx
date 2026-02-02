import React from "react";

const Log = ({ turns, players }) => {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {players[turn.player].toUpperCase()} selected [{turn.square.row + 1},{" "}
          {turn.square.col + 1}]
        </li>
      ))}
    </ol>
  );
};

export default Log;

import { useState } from "react";
import "./Player.css";

/* --------------------------------------------------------
Player component - Set the user names for player 1 and 2 
  - isEditing > To handle editing the player 
  - playerName > Player name, initially set from App

  - handleEditClick > Toggles the edit mode for the input
      when the button is clicked and if editing, passes the
      user up to the component
  - handleChange > on change of the input field, set the 
      player name with the current value
-------------------------------------------------------- */

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = () => {
    setIsEditing((editState) => !editState);
    if (isEditing) onChangeName(symbol, playerName);
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  // --------------------------------------------------------
  // Screen
  // --------------------------------------------------------
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            required
            value={playerName}
            onFocus={(event) => event.target.select()}
            onChange={handleChange}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
};

export default Player;

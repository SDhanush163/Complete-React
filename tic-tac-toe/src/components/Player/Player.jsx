import { useState } from "react";
import "./Player.css";

function Player({ initialName, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick() {
        setIsEditing((editState) => !editState);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li>
            <span className="player">
                {!isEditing ? (
                    <span className="player-name">{playerName}</span>
                ) : (
                    <input
                        type="text"
                        required
                        value={playerName}
                        onChange={handleChange}
                    />
                )}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>
                {!isEditing ? "Edit" : "Save"}
            </button>
        </li>
    );
}

export default Player;

import { useState } from "react";
import "./Player.css";

const Player = ({ initialName, symbol, isActive }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    const handleEditClick = () => {
        setIsEditing((editState) => !editState);
    };

    const handleChange = (event) => {
        setPlayerName(event.target.value);
    };

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
                        onSelect={(event) => event.target.select()}
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
};

export default Player;

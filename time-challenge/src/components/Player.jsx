import { useRef, useState } from "react";
import { toSentenceCase } from "../util/stringUtils";

/* --------------------------------------------------------
Player component - Set the user name up
  - playerName > state to handle the name, when empty, it 
      is set to null
  - inputValue > ref attached to the input element

  - handleClick > on button click, set the player name for 
      rendering
-------------------------------------------------------- */

const Player = () => {
  const [playerName, setPlayerName] = useState(null);
  const inputValue = useRef();

  const handleClick = () => {
    setPlayerName(
      inputValue.current.value
        ? toSentenceCase(inputValue.current.value)
        : null,
    );
    inputValue.current.value = "";
  };

  // --------------------------------------------------------
  // Screen
  // --------------------------------------------------------
  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={inputValue} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
};

export default Player;

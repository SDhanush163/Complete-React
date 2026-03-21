import { useRef, useState } from "react";
import { toSentenceCase } from "../util/stringUtils";

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

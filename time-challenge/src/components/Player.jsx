import { useRef, useState } from "react";

const toSentenceCase = (str) => {
  if (!str) return "";
  str = str.toLowerCase();
  return str.charAt(0).toUpperCase() + str.slice(1);
};

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

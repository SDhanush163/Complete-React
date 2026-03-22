import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

/* --------------------------------------------------------
Timer component - The main game component
  - timeRemaining > state to count down the time remaining 
      once the game has beem started
  - isTimerActive > Checks to see if the timer is active or
      has been either stopped or expired
  - timer > Ref to handle setting and clearing the interval 
      method
  - dialog > Ref attached to dialog component. Used to open 
      the modal programtically 

  - handleStart > method to handle the game Start. Uses the 
      setInterval to recalculate the Time remaining once 
      called with the button click when the timerActive is 
      false; i.e., the game is started
  - handleStop > method to handle the game Stop. Clears the 
      timer ref and open the result dialog
  - handleReset > method to handle the Reset component. 
      Passed to the dialog, this will reset the timer and 
      the isTimerActive indicator for next game
      
  - If the timer remaining hits zero, then the dialog is 
      automatically opened with the failure message
-------------------------------------------------------- */

const TimerChallenge = ({ title, targetTime }) => {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const isTimerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  const timer = useRef();
  const dialog = useRef();

  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);
  };

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  const handleStop = () => {
    dialog.current.open();
    clearInterval(timer.current);
  };

  const handleReset = () => setTimeRemaining(targetTime * 1000);

  // --------------------------------------------------------
  // Screen
  // --------------------------------------------------------
  return (
    <>
      <ResultModal
        ref={dialog}
        remainingTime={timeRemaining}
        targetTime={targetTime}
        onReset={handleReset}
      />

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isTimerActive ? handleStop : handleStart}>
            {isTimerActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={isTimerActive ? "active" : ""}>
          {isTimerActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;

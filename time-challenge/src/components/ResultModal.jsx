import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

// React version < 19, use below to forward ref instead of in the props
// const ResultModal = forwardRef(({ result, targetTime }, ref) => {})

/* --------------------------------------------------------
Result modal component - The result dialog box
  - didUserLose > Checks if the remaining time is zero to 
      compute if the user lost the challenge
  - formattedRemainingTime > Formatted time to seconds
  - score > Final score as a ration of remaining time to 
      the target time to get a score out of 100
  - dialog > Ref to encapsulate the <dialog> and give a 
      custom method through useImperativeHandle to open the 
      dialog
  
-------------------------------------------------------- */

const ResultModal = ({ remainingTime, targetTime, onReset, ref }) => {
  const didUserLose = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  // --------------------------------------------------------
  // Screen
  // --------------------------------------------------------
  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      <h2>{didUserLose ? "You lost" : `Your score - ${score}`}</h2>
      <p>
        Target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds Left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal"),
  );
};

export default ResultModal;

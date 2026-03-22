import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

// React version < 19, use below to forward ref instead of in the props
// const ResultModal = forwardRef(({ result, targetTime }, ref) => {})

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

import { useDispatch, useSelector } from "react-redux";
import { decrement, increase, increment, toggle } from "../store";
import classes from "./Counter.module.css";

// Alt - Implemention in one function
// const handleCounterChange = (state, amount = 0) => {
//   dispatch({ type: state, amount: amount });
// };
// <button onClick={() => handleCounterChange("increment")}>Increment</button>
// <button onClick={() => handleCounterChange("increase", 5)}>Increase by 5</button>
// <button onClick={() => handleCounterChange("decrement")}>Decrement</button>

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => dispatch(increment());
  const increaseHandler = () => dispatch(increase(5));
  const decrementHandler = () => dispatch(decrement());
  const toggleCounterhandler = () => dispatch(toggle());

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{show ? counter : "Counter hidden"}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterhandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// import {connect} from 'react-redux'
// import { Component } from "react";

// class Counter extends Component {
//   handleCounterChange(state) {
//     if (state === "increment") this.props.increment();
//     if (state === "decrement") this.props.decrement();
//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <button
//           onClick={() => this.handleCounterChange("increment").bind(this)}
//         >
//           Increment
//         </button>
//         <button
//           onClick={() => this.handleCounterChange("decrement").bind(this)}
//         >
//           Decrement
//         </button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return { counter: state.counter };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

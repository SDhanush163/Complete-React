import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleCounterChange = (state) => dispatch({ type: state });

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={() => handleCounterChange("increment")}>
        Increment
      </button>
      <button onClick={() => handleCounterChange("decrement")}>
        Decrement
      </button>
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

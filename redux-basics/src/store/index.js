import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import authSliceReducer from "./authSlice";
// import { createStore } from "redux";

const store = configureStore({
  reducer: { counter: counterSlice, auth: authSliceReducer },
});

export default store;

// const initialState = { counter: 0, showCounter: true };

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "increment":
//       return { ...state, counter: state.counter + 1 };
//     case "increase":
//       return { ...state, counter: state.counter + action.amount };
//     case "decrement":
//       return { ...state, counter: state.counter - 1 };
//     case "toggle":
//       return { ...state, showCounter: !state.showCounter };
//     default:
//       return state;
//   }
// };

// const store = createStore(counterReducer);

// export default store;

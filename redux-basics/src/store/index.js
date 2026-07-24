import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    increase: (state, action) => {
      state.counter += action.payload;
    },
    decrement: (state) => {
      state.counter--;
    },
    toggle: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({ reducer: counterSlice.reducer });

export const { increment, decrement, increase, toggle } = counterSlice.actions;
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

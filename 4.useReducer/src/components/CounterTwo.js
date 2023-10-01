import React, { useReducer } from "react";

const initilaState = {
    firstCounter : 0,
    secondCounter : 10
}

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state,firstCounter: state.firstCounter - action.value };
    case "increment 2":
      return { ...state,secondCounter: state.secondCounter + action.value };
    case "decrement 2":
      return { ...state,secondCounter: state.secondCounter - action.value };
    case "reset":
      return initilaState;
    default:
      return state;
  }
};


function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initilaState);
  return (
    <div>
      <div>FirstCount - {count.firstCounter}</div>
      <div>SecondCount - {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>
      <div>
      <button onClick={() => dispatch({ type: "increment 2", value: 2 })}>
        Increment Counter 2
      </button>
      <button onClick={() => dispatch({ type: "decrement 2", value: 2 })}>
        Decrement Counter 2
      </button>
      </div>
    </div>
  );
}

export default CounterTwo
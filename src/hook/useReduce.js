import React, { useReducer } from 'react'


function init (initialCount) {
  return { count: initialCount };
}

function reducer (state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

function useReducerDemo (initialCount) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
    <h2>useReducer用法:</h2>
      <div>Count: {state.count}</div>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button
        onClick={() => dispatch({ type: 'reset', payload: initialCount })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}


export default useReducerDemo;
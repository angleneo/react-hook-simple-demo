import React from 'react';
import useStateDemo from './hook/useStateDemo'
import useEffectDemo from './hook/useEffectDemo'
import UseContextDemo from './hook/useContextDeme'
import useReducerDemo from './hook/useReduce'
import { AppProvider } from './store'
import './App.css';



export function App () {
  return (
    <div className="App">
      {useStateDemo(1)}
      <hr />
      {useEffectDemo()}
      <hr />
      <AppProvider>
        <UseContextDemo />
      </AppProvider>
      <hr />
      {useReducerDemo(5)}
    </div>
  );
}

export default App;

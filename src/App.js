import React from 'react';
import useStateDemo from './hook/useStateDemo'
import useEffectDemo from './hook/useEffectDemo'
import UseContextDemo from './hook/useContextDeme'
import useReducerDemo from './hook/useReduce'
import inputTemplate from './todolist/inputTemplate'
import useAxiosDemo from './axios/useAxiosDemo'
import useToggleDemo from './hook/useToggleDemo'
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
      <hr />
      {inputTemplate()}
      <hr />
      {useAxiosDemo()}
      <hr />
      {useToggleDemo()}
    </div>
  );
}

export default App;

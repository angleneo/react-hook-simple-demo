import React, { useState } from 'react';

function useStateDemo (props) {
  let [text, handleChangeText] = useState('apple')
  let [count, setCount] = useState(() => {
    const initialState = props * 2;
    return initialState;
  })

  return (
    <div>
      <h2> useState用法: </h2>
      <button onClick={() => setCount(count + 1)}>点击改变数字</button>
      <div>count: {count}</div>
      <button onClick={() => handleChangeText(() => {
        if (text === 'apple') {
          return 'banana'
        } else {
          return 'apple'
        }
      })}>点击改变文字</button>
      <div>{text}</div>
    </div >
  )
}

export default useStateDemo;
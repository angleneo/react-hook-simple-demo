import React, { useState, useEffect } from 'react';
import { query, setQuery } from 'url-params-query'

function useStateDemo (props) {
  let [text, handleChangeText] = useState('apple')
  let [count, setCount] = useState(() => {
    const initialState = props * 2;
    return initialState;
  })

  useEffect(() => {
    console.log(query('t'))
  },[])

  return (
    <div>
      <h2> useState用法: </h2>
      <button onClick={() => setCount(count + 1)}>点击改变数字</button>
      <button onClick={() => setQuery(window.location.href, 't', '2020-07-08')}>添加url</button>
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
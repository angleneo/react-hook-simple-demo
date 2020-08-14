import React, { useState, useEffect } from 'react';

function useEffectDemo (props) {
  let [count, setCount] = useState(0)
  let [now, stopCount] = useState(false)


  useEffect(() => {
    let timer = null
    if (count === 0 || now) {
      return
    }
    timer = setInterval(() => {
      if (count < 100) {
        setCount(c => c+1);
      }
    }, 1000);
    return () => clearInterval(timer)
  },[count,now]);

  return (
    <>
      <h2>useEffect用法:</h2>
      <div className="time-box">
        <button onClick={() => {
          setCount(1)
          stopCount(false)
        }}>点击开始计时</button>
        <button style={{ display: count > 0 ? "block" : "none" }} onClick={() => stopCount(() => {
          if (now) {
            return false
          } else {
            return true
          }
        })}>{now ? '继续' : '暂停'}</button>
        <button onClick={() => setCount(0)}>清除计时</button>
      </div>
      <div>计时器:{count}</div>
    </>
  )
}

export default useEffectDemo;
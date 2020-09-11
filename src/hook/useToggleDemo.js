import React from 'react';
import { useToggle } from './useToggle' 
function useToggleDemo() {
  const [state, toggleState] = useToggle(false);
  return (<div>
    <h2>自定义hook —— 点击切换状态</h2>
    <p>{state ? 'true' : 'false'}</p>
    <button onClick={toggleState}>点击切换</button>
  </div>)
}

export default useToggleDemo;
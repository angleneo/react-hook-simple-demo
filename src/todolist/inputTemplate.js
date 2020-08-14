import React, { useState } from 'react'
import List from './list'

function InputTemplate () {
  const [text, setText] = useState("");
  const [child, setChild] = useState("");
  function Add () {
    if (text.length === 0) {
      return
    }
    setChild(text)
    setText("")
  }



  return (
    <>
      <div>
        <h2>TodoList</h2>
        <input id="todo" onChange={(e) => { setText(e.target.value) }} value={text} />
        <button onClick={Add} style={{ marginLeft: 10 }} >ADD</button>
      </div>

      <div>
        {List(child)}
      </div>
    </>
  );
}

export default InputTemplate;
import React, { useState, useEffect } from 'react'


function List (props) {
  const [list, setList] = useState([]);
  useEffect(() => {
    if (!props) {
      return
    }
    setList(l => {
      return [...l, [props]]
    })
  }, [props])

  function noResult () {
    return <div>什么都没有</div>
  }
  function deletee (index) {
    let arr = [...list];
    arr.splice(index, 1)
    setList(arr);
  }

  return (
    <>
      {
        list.length > 0 ? (<ul>
          {list.map((val, index) => {
            return <li data-index={index} key={index}>{val}
              <button onClick={() => deletee(index)} style={{ marginLeft: 10 }}>Del</button>
            </li>
          })}
        </ul>) : noResult()
      }
    </>
  );
}

export default List;
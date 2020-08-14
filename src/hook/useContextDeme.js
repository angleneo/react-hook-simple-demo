import React, { useContext } from 'react';
import AppContext from '../store';

function UseContextDemo (props) {
  const { list } = useContext(AppContext)

  return (
    <>
      <h2>useContext用法:</h2>年
      <ul>
        {list.map(val => 
          <li key={val.name}>{val.name}</li>
        )}
      </ul>
    </>
  )
}

export default UseContextDemo;
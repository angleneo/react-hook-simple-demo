import React, { useContext } from 'react';
import AppContext from '../store';

function UseContextDemo (props) {
  const { list } = useContext(AppContext)

  return (
    <>
      <h2>useContext用法:</h2>
      <ul>
        {list.map(val => 
          <li key={val.name}>I am {val.name}, i am {val.age} years old.</li>
        )}
      </ul>
    </>
  )
}

export default UseContextDemo;
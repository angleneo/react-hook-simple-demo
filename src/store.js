import React, { createContext, useState } from 'react';


const AppContext = createContext();

const { Provider } = AppContext;

export function AppProvider (props) {
  const [list, setlist] = useState([
    { name: 'Make', age: 19 },
    { name: 'Tony', age: 29 }
  ])
  return <Provider value={{ list, setlist }}>{props.children}</Provider>
}

export default AppContext;
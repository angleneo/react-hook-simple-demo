import React, { createContext, useState } from 'react';


const AppContext = createContext();

const { Provider } = AppContext;

export function AppProvider (props) {
  const [list, setlist] = useState([
    { name: 'xx', age: 19 },
    { name: 'aa', age: 29 }
  ])
  return <Provider value={{ list, setlist }}>{props.children}</Provider>
}

export default AppContext;
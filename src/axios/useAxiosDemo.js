import React, { useState, useEffect } from 'react';
import axios from 'axios'

function useAxiosDemo (props) {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:9000/api/getList').then(res => {
      setData(res.data.data)
    })
  }, [])
  return (
    <>
      <ul>
        {
          data.map((item, index) => {
            return <li key={index}>{item.name}</li>
          })
        }
      </ul>
    </>
  )
}
export default useAxiosDemo
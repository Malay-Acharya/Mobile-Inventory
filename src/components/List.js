import React from 'react'
import { useSelector } from 'react-redux';

export default function MainList() {
  const list = useSelector(state => state.changeinventory);
  return (
    <div>
      {list.map(item => {
        return(
          <div key = {item.id}>
            <h2>{item.name}</h2>
          </div>
        );
      })}
    </div>
  )
}

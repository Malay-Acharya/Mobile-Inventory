import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';

export default function Gallery() {
    const list = useSelector(state => state.changeinventory)
  return (
    <div>
        <div>this is gallery</div>
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

import React from 'react'
import { useSelector } from 'react-redux';

export default function MainList() {
  const list = useSelector(state => state.changeinventory);
  return (
    <div className='my-4 flex flex-col gap-4 ml-2'>
      {list.map(item => {
        return(
          <div key = {item.id} className=' pl-4 py-1 border-2 border-black cursor-pointer flex gap-4'>
            <h2>{item.name}</h2>
            <h2>Price: {item.price}</h2>
            <h2>Available Units: {item.units}</h2>
          </div>
        );
      })}
    </div>
  )
}

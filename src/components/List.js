import React from 'react'
import { useSelector } from 'react-redux';
import { DELETEITEM } from '../actions';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';

export default function MainList() {
  const dispatch = useDispatch();
  const list = useSelector(state => state.changeinventory);
  return (
    <div className='my-4 flex flex-col gap-4 ml-2'>
      {list.filter(item => item.vis === 1).map(item => {
        return(
          <div key = {item.id} className=' pl-4 py-1 border-2 border-black flex gap-4'>
            <h2 className='cursor-pointer'>{item.name}</h2>
            <h2>Price: {item.price}</h2>
            <h2>Available Units: {item.units}</h2>
            <h2 onClick={() => {dispatch(DELETEITEM(item))}} className = 'absolute right-32 cursor-pointer'>Delete</h2>
          </div>
        );
      })}
    </div>
  )
}

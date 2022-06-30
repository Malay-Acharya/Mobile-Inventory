import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { CHANGECLICK } from '../actions';

export default function AddItem() {
  const dispatch = useDispatch();
  const [state, changestate] = useState(false);
  return (
    <button  onClick={() => {changestate(!state);dispatch(CHANGECLICK(state))}} className='absolute top-6 left-80 bg-black text-white font-bold px-8 py-2'>
        Add Item
    </button>
  )
}

import React from 'react'
import MainList from './List'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import Gallery from './Gallery';

export default function Main() {
  const val2 = useSelector(state => state.changeview);
  return (
    <div className='border-2'>
        {val2 === true?<MainList/>:<Gallery/>}
    </div>
  )
}

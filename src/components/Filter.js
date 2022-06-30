import React from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { FILTEROVER } from '../actions';
import { FILTERUNDER } from '../actions';

export default function Filter() {
    const dispatch = useDispatch();
    const checkbound = (e, val) =>{
        dispatch(FILTERUNDER(e.target.checked, val))
    }
    const checkupbound = (e, val) =>{
        dispatch(FILTEROVER(e.target.checked, val))
    }
  return (
    <div className='flex-col mt-8 ml-8 h-60 w-72'>
        <h2 className='font-bold text-2xl pb-4'>Filters</h2>
        <h3 className='text-m font-bold pb-1'>Categories</h3>
        <form className='flex-col'>
            <div className='flex my-1 font-medium '>
                <input id = "checkbox_id1" type="checkbox" className='inline-block' onChange={(e) => {checkbound(e, 5000)}}></input>
                <label for="checkbox_id1" className='pl-3'>Price under 5000</label> 
            </div>
            <div className='flex my-1 font-medium '>
                <input id="checkbox_id2" type="checkbox" className='inline-block' onChange={(e) => {checkupbound(e, 5000)}}></input>
                <label for="checkbox_id2" className='pl-3'>Price over 5000</label> 
            </div>
        </form>
    </div>
  )
}

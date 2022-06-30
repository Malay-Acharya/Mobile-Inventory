import React from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { CHANGEVIEW, SORT } from '../actions'

export default function View() {
  const dispatch = useDispatch();
  const viewchanged = (e) =>{
    dispatch(CHANGEVIEW(e.target.value))
  }

  const sorting = (e) =>{
    dispatch(SORT(e));
  }

  return (
    <div className=' absolute top-6 right-20 flex justify-end mr-6 gap-8'>
        <form className='border-black border-2 inline-block py-1 pr-4 pl-2 text-m'>
            <label className='pr-2 text-gray-500'>View</label>
            <select onChange={e => viewchanged(e)}  defaultValue="Gallery" name="view" className='outline-0 border-6 focus:outline-none cursor-pointer '>
            <option value="1">Gallery</option>
            <option value="0">List</option>
            </select>
        </form>
        <form className='border-black border-2 inline-block py-1 pr-4 pl-2 text-m'>
            <label className='pr-2 text-gray-500'>Sort By</label>
            <select onChange={e => sorting(e.target.value)} defaultValue="Featured" name="view" className='outline-0 border-6 focus:outline-none cursor-pointer '>
            <option value="3">Featured</option>
            <option value="2">Price: Low to High</option>
            <option value="1">Price: High to Low</option>
            </select>
        </form>
    </div>
  )
}

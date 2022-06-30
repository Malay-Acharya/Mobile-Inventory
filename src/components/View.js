import React from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { CHANGEVIEW } from '../actions'

export default function View() {
  const dispatch = useDispatch();
  const viewchanged = (e) =>{
    dispatch(CHANGEVIEW(e.target.value))
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
            <select defaultValue="Featured" name="view" className='outline-0 border-6 focus:outline-none cursor-pointer '>
            <option value="Featured">Featured</option>
            <option value="Lowest">Price: Low to Hight</option>
            <option value="Highest">Price: High to Low</option>
            </select>
        </form>
    </div>
  )
}

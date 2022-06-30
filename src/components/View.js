import React from 'react'
import {  } from 'react-icons'

export default function View() {
  return (
    <div className=' absolute top-0 right-10 flex justify-end mr-6 gap-8'>
        <form className='border-black border-2 inline-block py-1 pr-4 pl-2 text-m'>
            <label className='pr-2 text-gray-500'>View</label>
            <select name="view" className='outline-0 border-6 focus:outline-none cursor-pointer '>
            <option value="Gallery" selected>Gallery</option>
            <option value="List">List</option>
            </select>
        </form>
        <form className='border-black border-2 inline-block py-1 pr-4 pl-2 text-m'>
            <label className='pr-2 text-gray-500'>Sort By</label>
            <select name="view" className='outline-0 border-6 focus:outline-none cursor-pointer '>
            <option value="Featured" selected>Featured</option>
            <option value="Lowest">Price: Low to Hight</option>
            <option value="Highest">Price: High to Low</option>
            </select>
        </form>
    </div>
  )
}

import React from 'react'

export default function Filter() {
  return (
    <div className='flex-col mt-8 ml-8 h-60 w-72'>
        <h2 className='font-bold text-2xl pb-4'>Filters</h2>
        <h3 className='text-m font-bold pb-1'>Categories</h3>
        <form className='flex-col'>
            <div className='flex my-1 font-medium '>
                <input type="checkbox" className='inline-block'></input>
                <label className='pl-3'>Price under 5000</label> 
            </div>
            <div className='flex my-1 font-medium '>
                <input type="checkbox" className='inline-block'></input>
                <label className='pl-3'>Price under 5000</label> 
            </div>
            <div className='flex my-1 font-medium '>
                <input type="checkbox" className='inline-block'></input>
                <label className='pl-3'>Price under 5000</label> 
            </div>
            <div className='flex my-1 font-medium '>
                <input type="checkbox" className='inline-block'></input>
                <label className='pl-3'>Price under 5000</label> 
            </div>
        </form>
    </div>
  )
}

import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { ADDITEM } from '../actions';

export default function AddItemForm() {
    const [name, changename] = useState("");
    const [price, changeprice] = useState("");
    const [os, changeos] = useState("");
    const [ram, changeram] = useState("");
    const [units, changeunits] = useState("");
    const [weight, chagneweight] = useState("");
    const dispatch = useDispatch();
    return (
        <form className='flex w-11/12 gap-4' onSubmit={(e)=>{
            e.preventDefault();
            var obj = {
                "name": name,
                "price": price,
                "os": os,
                "ram": ram,
                "units": units,
                "weight": weight,
                "image": "https://m.media-amazon.com/images/I/717eAvRa5dL._SL1500_.jpg",
            }
            dispatch(ADDITEM(obj))
        }}>
            <div className='flex'>
                <div className='pb-4 w-50 flex flex-col gap-3'>
                    <label className='block pr-4'>Name of the product:</label>
                    <label className='block pr-4'>Price of the product:</label>
                </div>
                <div className='pb-4 w-40 flex flex-col gap-2'>
                    <input onChange = {(e) =>{changename(e.target.value)}} className='block pl-2 border-2 border-black ' type ="text"></input>
                    <input onChange = {(e) =>{changeprice(e.target.value)}} className='block pl-2 border-2 border-black ' type ="text"></input>
                </div>
            </div>
            <div className = 'flex'>
                <div className='pb-4 w-50 flex flex-col gap-3'>
                    <label className='block pr-4'>Operating System:</label>
                    <label className='block pr-4'>RAM:</label>
                </div>
                <div className='pb-4 w-40 flex flex-col gap-2'>
                    <input onChange = {(e) =>{changeos(e.target.value)}} className='block pl-2 border-2 border-black ' type ="text"></input>
                    <input onChange = {(e) =>{changeram(e.target.value)}} className='block pl-2 border-2 border-black ' type ="text"></input>
                </div>
            </div> 
            <div className='flex'>
                <div className='pb-4 w-50 flex flex-col gap-3'>
                    <label className='block pr-4'>Total Weight:</label>
                    <label className='block pr-4'>Available Units:</label>
                </div>
                <div className='pb-4 w-40 flex flex-col gap-2'>
                    <input onChange = {(e) =>{chagneweight(e.target.value)}} className='block pl-2 border-2 border-black ' type ="text"></input>
                    <input onChange = {(e) =>{changeunits(e.target.value)}} className='block pl-2 border-2 border-black ' type ="text"></input>
                </div>
            </div>
            <div className='bg-black h-10 text-white font-bold px-4 py-2 mt-6'>
                <button>Submit</button>
            </div>
            
        </form>
    )
}

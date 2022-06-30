import React from 'react'
import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { CHANGEVIEW } from '../actions';

export default function Product() {
    const dispatch = useDispatch();
    let obj = useParams().id;
    const st = useSelector(state => state.changeinventory);
    let idx = st.filter(x => x.id == obj);
    idx = idx[0];
    const val = useSelector(state =>state.changeview);
    if(val === true){
        dispatch(CHANGEVIEW(val));
    }
    return (
    <div>
        <div className='w-screen bg-black p-4 text-white font-bold text-lg'>Mobile Store</div>
        <div className='w-6/12 m-auto my-20 border-2 border-black px-20 py-20 flex gap-30'>
            <img alt = 'phone' className='h-96' src = {idx.image}></img>
            <div className='flex flex-col gap-3 ml-8 mt-2 font-bold h-96'>
                <h2 className='text-4xl'>{idx.name}</h2>
                <div className='flex flex-col justify-center h-56 text-xl'>
                <h2>Price: {idx.price}</h2>
                <h2>Available Units: {idx.units}</h2>
                <h2>Operating System: {idx.os}</h2>
                <h2>Weight: {idx.weight}</h2>
                <h2>RAM: {idx.ram}</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

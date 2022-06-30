import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { DELETEITEM } from '../actions';

export default function Gallery() {
    const list = useSelector(state => state.changeinventory)
    const dispatch = useDispatch()
    return (
        <div className='grid grid-cols-4 gap-3'>
        {list.filter(item => item.vis === 1).map(item => {
                return(
                    <div key = {item.id} className=' border-2 border-grey h-96 flex flex-col items-center py-4 relative' >
                        <div className='overflow-hidden cursor-pointer'>
                            <img src={item.image} alt = "the phone" className="h-64"></img>
                        </div>
                        <h2 className=''>{item.name}</h2>
                        <h2 className=''>{item.price}</h2>
                        <div className='absolute top-2 right-4 text-2xl cursor-pointer' onClick={() => {dispatch(DELETEITEM(item))}}>
                            X
                        </div>
                    </div>
                    );
        })}
        </div>
    )
}

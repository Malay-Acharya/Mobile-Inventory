import React from 'react'
import Header from './Header'
import AddItem from './AddItem'
import Filter from './Filter'
import View from './View'
import AddItemForm from './AddItemForm'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import Main from './Main'

export default function Home() {
    const val = useSelector(state => state.changestate);
  return (
    <div>
        <Header/>
        <div className="relative flex h-screen">
        <AddItem/>
        <Filter/>
        <View/>
        <div className="mt-20 w-9/12 flex-col">
          {val === true?<AddItemForm/>:(<></>)}
          <Main/>
        </div>
      </div>
    </div>
  )
}

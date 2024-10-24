import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {inc,dec} from './Slices'
const Counter = () => {

    const count = useSelector((state) => state.counter.value)

    const dispatch=useDispatch()
  return (
    <div>
      <button onClick={()=>dispatch(inc())}>increment</button>
      {count}
      <button onClick={()=>dispatch(dec())}>Decrement</button>
    </div>
  )
}

export default Counter

import React from 'react'

const Button = (props) => {
  

  return (
    <div>
        <button onClick={()=>props.setValue((prev)=>prev+1)}>Increment</button>
        <button onClick={()=>props.setValue((prev)=>prev-1)}>Decrement</button>
    </div>
  )
}

export default Button

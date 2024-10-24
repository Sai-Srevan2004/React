import React from 'react'

const Reset = (props) => {
  return (
    <div>
        <button onClick={()=>props.setValue(0)}>Reset</button>
    </div>
  )
}

export default Reset

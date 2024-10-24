import React, { useState } from 'react'
import Button from './Components/Button'
import Countvalue from './Components/Countvalue'
import Reset from './Components/Reset'

const App = () => {

  const [value,setValue]=useState(0)
  return (
    <div>
      <h1>Incremet & decrement</h1>
      <Button value={value} setValue={setValue}></Button>
      <Countvalue value={value} setValue={setValue}></Countvalue>
       <Reset setValue={setValue}></Reset>
    </div>
  )
}

export default App

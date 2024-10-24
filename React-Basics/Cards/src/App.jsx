import React from 'react'
import data from './data'
import Card from './Components/Card'


const App = () => {
  return (
    <div>
       <h1>Plan With Love</h1>
      <div className="cards-container">
          {
            data.map((z)=>{
              return <Card z={z}/>
            })
          }
      </div>
      
    </div>
  )
}

export default App

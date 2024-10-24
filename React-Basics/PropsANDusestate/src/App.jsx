import React from 'react'
import Item from './Components/Item'
import Itemdetails from './Components/Itemdetails'
import Form from'./Components/Form'

const App = () => {
  const data=[
    {
      name:"nirma",
      date:"20 june 1990",
    }
    ,{
      name:"ariel",
      date:"29 aug 1970",
    }
    ,{
      name:"surf excel",
      date:"21 sep 2000",
    }
  ]

  //example for child to parent communication via prop functions

   function printdata(data){
         console.log("data from app.jsx:",data)
   }

  return (
    <div>
       <h1>Hello from app component</h1>
       <Form printdata={printdata}></Form>

       <Item name={data[0].name}>
           I am first item component used
       </Item>
       <Itemdetails date={data[0].date}></Itemdetails>

       <Item name={data[1].name}></Item>
       <Itemdetails date={data[1].date}></Itemdetails>
       <Item name={data[2].name}></Item>
       <Itemdetails date={data[2].date}></Itemdetails>
        
    </div>
  )
}

export default App

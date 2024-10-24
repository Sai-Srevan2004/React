import React, { useEffect, useState } from 'react'
import Nav from './Components/Nav'
import FilterDiv from './Components/Filterdiv'
import CardContainer from './Components/CardContainer'
import { apiUrl,filterData } from './Data'
import Loader from './Components/Loader'



const App = () => {

  const [courses,setCourses]=useState(null)
  const [loader,setLoader]=useState(true)
  const [category,setCategory]=useState(filterData[0].title)

  console.log("category:",category)
  
  const fetchData=async()=>{
    try {
       const response=await fetch(apiUrl);
       const outdata=await response.json();

      //  console.log(outdata.data)
       setCourses(outdata.data)
       setLoader(false)
    } catch (error) {
     console.log(error)
    }
 }
 
 
 useEffect(()=>{
    fetchData();
 },[])

  return (
    <div>
       <Nav></Nav>
       <FilterDiv filterData={filterData} setCategory={setCategory} category={category}></FilterDiv>
        {
          loader?<Loader/>: <CardContainer courses={courses} category={category}></CardContainer>
        }
    </div>
  )
}

export default App

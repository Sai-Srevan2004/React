import React, { useEffect, useState } from 'react'
import {API_URL} from '../Data'
import Card from '../Components/Card'

const Home = () => {

  const [loading,setLoading]=useState(false)
  const [data,setData]=useState([])

  const fecthData=async ()=>{
    setLoading(true)
    try {
       const dta=await fetch(API_URL)
       const response=await dta.json()
       setData(response)
       
    } catch (error) {
       console.log(error)
    }
    setLoading(false)
    
  }


  useEffect(()=>{
    fecthData()
  },[])


  return (
    <div>
       {
        loading?<h1>Loading...</h1>:
        data.map((dt)=>{
          return <Card key={dt.id} dt={dt}/>
        })
       }
    </div>
  )
}

export default Home

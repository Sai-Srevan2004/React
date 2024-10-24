import React from 'react'
import Nav from './Components/Nav'
import { Outlet } from 'react-router-dom'
const AppLayout = ({isLoggedIn,setIsLoggedIn}) => {
  return (
    
       <div>
            <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  />
            <Outlet />
        </div>
   
  )
}

export default AppLayout

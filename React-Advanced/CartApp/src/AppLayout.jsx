import React from 'react'
import Nav from './Components/Nav'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <Nav/>
       <Outlet></Outlet>
    </div>
  )
}

export default AppLayout

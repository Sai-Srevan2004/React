import React from 'react'
import { NavLink ,Outlet} from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
       <header>
          <ul>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/about'><li>About us</li></NavLink>
            <NavLink to='/contact'><li>Contact us</li></NavLink>
          </ul>
       </header>
          <Outlet/>
    </div>
  )
}

export default AppLayout

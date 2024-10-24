import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='navbar'>
       
       <Link to='/'>
       <div className="logo">
           Shopping App
       </div>
       </Link>
       <div className="nav">
           <Link to='/'> <p>Home</p></Link>
           <Link to='/cart'><p>cart</p></Link>
       </div>
    </div>
  )
}

export default Nav

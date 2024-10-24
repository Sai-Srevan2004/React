import React from 'react'
import Logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom'

const Nav = ({isLoggedIn,setIsLoggedIn}) => {
    return (
        <div className='navbar'>
            <div className="logo">
                <Link to='/'><img src={Logo} alt="Logo" /></Link>
            </div>
            <div className="lists">
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <li>About us</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="ls">
              {
                  isLoggedIn?<Link to='/'><button onClick={()=>setIsLoggedIn(false)} >Logout</button></Link>: <Link to='/login'><button >Login</button></Link>
                }
                
                {
                  isLoggedIn?<Link to='/dashboard'><button onClick={()=>setIsLoggedIn(false)} >Dashboard</button></Link>: <Link to='/signup'><button >SignUp</button></Link>
                }
                   
               
            </div>
        </div>
    )
}

export default Nav

import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorComponent = () => {
  return (
    <div>
        404 not found

       <br />
       <br />
       go back to home Page
       <br />
       <br />
       <NavLink to='/'><button>back</button></NavLink>
    </div>
  )
}

export default ErrorComponent

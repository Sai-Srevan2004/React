import React from 'react'
import Template from '../Components/Template'

const Login = ({setIsLoggedIn}) => {
  return (
    <div>
      <Template setIsLoggedIn={setIsLoggedIn}  formtype='login' />
    </div>
  )
}

export default Login

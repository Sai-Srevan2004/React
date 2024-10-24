import React from 'react'
import Template from '../Components/Template'

const SignUp = ({setIsLoggedIn}) => {


  return (
    <div >
        <Template setIsLoggedIn={setIsLoggedIn} formtype='signup' />
    </div>

  )
}

export default SignUp

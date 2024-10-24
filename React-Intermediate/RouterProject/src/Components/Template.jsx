import React from 'react'
import loginpng from '../assets/login.png'
import LoginForm from './LoginForm'
import SignUpForm from './SignupForm'

const Template = (props) => {

    return (
        <div className='template'>
            <div className="left-div">
                <h1 className="title">Welcome Back</h1>
                <p className="desc">
                    Build skills for today, tomorrow, and beyond.
                    Education to future-proof your career.
                </p>
                {
                    props.formtype === 'login' ? <LoginForm setIsLoggedIn={props.setIsLoggedIn}/>:<SignUpForm setIsLoggedIn={props.setIsLoggedIn}/>}
               
            </div>
            <div className="right-div">
                <img src={loginpng} alt="Login Illustration" />
            </div>
        </div>
    );
}

export default Template;

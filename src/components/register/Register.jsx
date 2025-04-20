import React from 'react'
import "./register.css"
function Register() {
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form action="" className="loginForm">
            <label htmlFor="" >Username</label>
            <input className='registerInput' type="text" placeholder='Enter your username...'/>
            <label htmlFor="" >Email</label>
            <input className='registerInput' type="email" placeholder='Enter your email...'/>
            <label htmlFor="" >Password</label>
            <input className='registerInput' type="password" placeholder='Enter your password...'/>
            <button className='registerButton'>Register</button>
        </form>
        <button className='registerLoginButton'>register</button>
    </div>
  )
}

export default Register
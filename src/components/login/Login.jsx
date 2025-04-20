import React from 'react'
import "./login.css"
function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form action="" className="loginForm">
            <label htmlFor="" className='loginInput'>Email</label>
            <input type="text" placeholder='Enter your email...'/>
            <label htmlFor="" className='loginInput'>Password</label>
            <input type="password" placeholder='Enter your password...'/>
            <button className='loginButton'>Login</button>
        </form>
        <button className='loginRegisterButton'>Register</button>
    </div>
  )
}

export default Login
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import "./login.css"

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      navigate("/")
    } catch (err) {
      setError("Login failed")
    }
  }

  return (
    <div className='login'>
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        {error && <span className="loginError">{error}</span>}
        <label>Email</label>
        <input 
          type="email" 
          placeholder='Enter your email...'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <input 
          type="password" 
          placeholder='Enter your password...'
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button className='loginButton' type="submit">Login</button>
      </form>
      <Link to="/register">
        <button className='loginRegisterButton'>Register</button>
      </Link>
    </div>
  )
}

export default Login
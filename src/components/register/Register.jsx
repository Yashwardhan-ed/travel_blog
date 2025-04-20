import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import "./register.css"

function Register() {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      
      if (users.some(user => user.email === email)) {
        setError("Email already registered")
        return
      }

      users.push({
        username,
        email,
        password
      })
      
      localStorage.setItem('users', JSON.stringify(users))
      navigate("/login")
    } catch (err) {
      setError("Registration failed")
    }
  }

  return (
    <div className='register'>
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        {error && <span className="registerError">{error}</span>}
        <label>Username</label>
        <input 
          className='registerInput' 
          type="text" 
          placeholder='Enter your username...'
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <label>Email</label>
        <input 
          className='registerInput' 
          type="email" 
          placeholder='Enter your email...'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <input 
          className='registerInput' 
          type="password" 
          placeholder='Enter your password...'
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button className='registerButton' type='submit'>Register</button>
      </form>
      <Link to="/login">
        <button className='registerLoginButton'>Login</button>
      </Link>
    </div>
  )
}

export default Register
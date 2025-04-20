import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { userContext } from './userContext/userContext';

import "./login.css"

function Login() {
  const navigate = useNavigate();
  const { handleIsLogged } = useContext(userContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        localStorage.setItem('currentUser', JSON.stringify({
          username: user.username,
          email: user.email
        }));
        handleIsLogged(true);
        navigate("/");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("Login failed");
    }
  };

  return (
    <div className='login'>
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        {error && <span className="loginError">{error}</span>}
        <label>Email</label>
        <input 
          type="email" 
          className='loginInput'
          placeholder='Enter your email...'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <input 
          type="password" 
          className='loginInput'
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
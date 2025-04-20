import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./topBar.css"

function topBar() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    setUser(currentUser)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('currentUser')
    setUser(null)
    navigate('/login')
  }

  return (
    <div className='top'>
      <i className="topIcon fa-brands fa-facebook"></i>
      <i className="topIcon fa-brands fa-x-twitter"></i>
      <i className="topIcon fa-brands fa-instagram"></i>
      <ul className='topList'>
        <li className='topListItem'>
          <Link to="/">HOME</Link>
        </li>
        {user && (
          <>
            <li className='topListItem'>
              <Link to="/write">WRITE</Link>
            </li>
            <li className='topListItem'>
              <Link to="/settings">SETTINGS</Link>
            </li>
            <li className='topListItem' onClick={handleLogout}>
              LOGOUT
            </li>
          </>
        )}
        {!user && (
          <>
            <li className='topListItem'>
              <Link to="/login">LOGIN</Link>
            </li>
            <li className='topListItem'>
              <Link to="/register">REGISTER</Link>
            </li>
          </>
        )}
        <li className='topListItem'>
          <Link to="/recommendations">RECOMMENDATIONS</Link>
        </li>
        <li className='topListItem'>
          <Link to="/settings">SETTINGS</Link>
        </li>
      </ul>
      <div className='topRight'>
        {user && (
          <span className="topUsername">{user.username}</span>
        )}
        <img className="topImg" src="" alt="" />
        <i className="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default topBar
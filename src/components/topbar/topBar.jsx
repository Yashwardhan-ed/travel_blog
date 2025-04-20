import React from 'react'
import { Link } from 'react-router-dom'
import "./topBar.css"
function topBar() {
  const user = false;
  return (
    <div className='top'>
      <i className="topIcon fa-brands fa-facebook"></i>
      <i className="topIcon fa-brands fa-x-twitter"></i>
      <i className="topIcon fa-brands fa-instagram"></i>
      <ul className='topList'>
          <li className='topListItem'>
            <Link to="/">HOME</Link>
          </li>
          <li className='topListItem'>
            <Link to="/write">WRITE</Link>
          </li>
          <li className='topListItem'>
            <Link to="/settings">SETTINGS</Link>
          </li>
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
        </ul>
      <div className='topRight'>
        <img className="topImg" src="" alt="" />
        <i className="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default topBar
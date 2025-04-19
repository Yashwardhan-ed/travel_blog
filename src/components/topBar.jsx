import React from 'react'
import "./topBar.css"
function topBar() {
  return (
    <div className='top'>
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-x-twitter"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
            <ul className='topList'>
                <li className='topListItem'>Home</li>
                <li className='topListItem'>About</li>
                <li className='topListItem'>Contact</li>
                <li className='topListItem'>Write</li>
            </ul>
        <div className='topRight'>
            <img className="topImg" src="" alt="" />
            <i class="searchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default topBar
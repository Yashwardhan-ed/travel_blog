import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../login/userContext/userContext';

import "./topBar.css"

function topBar() {
  const { isLogged, handleIsLogged, profilePic } = useContext(userContext); 
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    handleIsLogged(false); 
    navigate('/login');
  };

  return (
    <div className='top top-responsive text-sm sm:text-xl font-semibold px-3 py-2 bg-[#ffda83] border border-[#939200]shadow-[0_0_2px_#888888] rounded-lg flex justify-between items-center mb-5'
    style={{fontFamily: "Instrument Serif"}}>
      <ul className='topList flex gap-3'>

        <li className='topListItem'>
          <Link to="/">HOME</Link>
        </li>

        {isLogged && (
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

        {!isLogged && (
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

      <div className='topRight flex items-center gap-3'>
        {isLogged && (
          <span className="topUsername">Welcome!</span>
        )}
        <img
          className="topImg h-7 rounded-full"
          src={profilePic || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu0ONuALFfeKupSwSbEdXsoS8MT4U66WNjiQ&s"}
          alt=""
        /> 
        {/* <i className="searchIcon fa-solid fa-magnifying-glass"></i> */}
      </div>

    </div>
  );
}

export default topBar;
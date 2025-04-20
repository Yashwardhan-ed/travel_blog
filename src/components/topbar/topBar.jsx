import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../login/userContext/userContext';

import "./topBar.css"

function topBar() {
  const { isLogged, handleIsLogged } = useContext(userContext); 
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    handleIsLogged(false); 
    navigate('/login');
  };

  return (
    <div className='top'>
      <ul className='topList'>
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
      <div className='topRight'>
        {isLogged && (
          <span className="topUsername">Welcome!</span>
        )}
        <img className="topImg" src="" alt="" />
        <i className="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default topBar;
import React from 'react';
import './navbar.css';

import BRLogo from '../../assets/img/svg/logo.svg';

import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navContainer">
      <img className='logo' src={BRLogo} alt="beach-resort Logo" />
      <div className='navTextContainer'>
      <Link to='/' className='navText'>
           Home
      </Link>
      <Link to='/search' className='navText'>
        Rooms
      </Link>
      </div>
      </div>
    </div>
  )
}
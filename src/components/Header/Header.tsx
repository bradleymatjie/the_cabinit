import React from 'react';
import './Header.scss';

import logo from '../../media/logo.png';

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='header_logo'>
        <img 
          src={logo}
          alt="logo"
          width={165}
          height={41}
        />
      </div>

      <nav className='header_nav'>
        <li>WHAT WE DO</li>
        <li>SERVICES</li>
        <li>ABOUT US</li>
        <button
        >GET IN TOUCH</button>
      </nav>
    </header>
  );
}
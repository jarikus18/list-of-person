import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => (
  <header className="header">
    <nav>
      <ul className="nav">
        <li><NavLink exact to='/'>Home</NavLink></li>
        <li><NavLink to='/person'>Person</NavLink></li>
        <li><NavLink to='/contacts'>Contacts</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;

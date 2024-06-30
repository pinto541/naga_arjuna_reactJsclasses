import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Logo
        </Link>
        <div className="menu-icon">
          <i className="fas fa-bars"></i>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/abouts" className="nav-links">
              About
            </Link>
          </li>
          
          <li className="nav-item">
            <Link to="/imag" className="nav-links">
              Image
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

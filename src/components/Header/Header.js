/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './jsflix-logo-min.png';

const Header = ({ loginBtn, children }) => (
  <header className="header">
    <div className="header-logo">
      <Link to="/">
        <img src={logo} alt="JSFLIX LOGO" className="logo" />
      </Link>
    </div>
    {loginBtn && (
      <Link to="/login">
        <button type="button" className="btn-login">LOGIN</button>
      </Link>
    )}
    {children}
  </header>
);

export default Header;

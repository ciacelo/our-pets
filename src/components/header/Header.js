import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

import { ReactComponent as Dogs } from '../../assets/dogs.svg';

const Header = () => {
  return (
    <div id="headerNav">
      <nav className="navLink container">
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <Link className="login" to="/login">
          Login / Criar
        </Link>
      </nav>
    </div>
  );
};

export default Header;

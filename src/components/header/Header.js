import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

import { ReactComponent as Dogs } from '../../assets/dogs.svg';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);
  return (
    <div id="headerNav">
      <nav className="navLink container">
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <>
            <Link className="login" to="/profile">
              {data.username}{' '}
            </Link>
            <button onClick={() => userLogout()} className="button-logout">
              Sair
            </button>
          </>
        ) : (
          <Link className="login" to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;

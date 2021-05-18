import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MyPhotos } from '../../../assets/feed.svg';
import { ReactComponent as Stats } from '../../../assets/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../../assets/adicionar.svg';
import { ReactComponent as Exit } from '../../../assets/sair.svg';
import useMedia from '../../../hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <>
      {mobile && (
        <button
          className="mobileButton"
          id="user-header-nav-mobileButton"
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav id="user-header-nav" className="nav">
        <NavLink to="/conta" end activeClassName="active">
          <MyPhotos />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas" activeClassName="active">
          <Stats />
          {mobile && 'Estatisticas'}
        </NavLink>
        <NavLink to="/conta/postar" activeClassName="active">
          <AddPhoto />
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={userLogout}>
          <Exit />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;

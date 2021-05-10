import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MyPhotos } from '../../../assets/feed.svg';
import { ReactComponent as Stats } from '../../../assets/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../../assets/adicionar.svg';
import { ReactComponent as Exit } from '../../../assets/sair.svg';

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);
  return (
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
  );
};

export default UserHeaderNav;

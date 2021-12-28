import React from 'react';
import { Navigate } from 'react-router';
// import Login from '../login';
import { UserContext } from '../UserContext';

const ProtectedRouter = ({children}) => {
  const { login } = React.useContext(UserContext);
  console.log('login: ', login)
  return login ? children : <Navigate to="/login" />;
};

export default ProtectedRouter;

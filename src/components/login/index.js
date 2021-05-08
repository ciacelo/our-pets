import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { UserContext } from '../UserContext';

import './login.scss';
import LoginCreate from './LoginCreate';
import LoginForgetPassword from './LoginForgetPassword';
import LoginForm from './LoginForm';
import LoginResetPassword from './LoginResetPassword';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="recuperar" element={<LoginForgetPassword />} />
        <Route path="resetar" element={<LoginResetPassword />} />
      </Routes>
    </div>
  );
};

export default Login;

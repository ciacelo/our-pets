import React from 'react';
import { Route, Routes } from 'react-router';

import './login.scss';
import LoginCreate from './LoginCreate';
import LoginForgetPassword from './LoginForgetPassword';
import LoginForm from './LoginForm';
import LoginResetPassword from './LoginResetPassword';

const Login = () => {
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

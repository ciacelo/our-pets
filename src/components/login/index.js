import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { UserContext } from '../UserContext';

import './login.scss';
import '../forms/button.scss';
import LoginCreate from './LoginCreate';
import LoginForgetPassword from './LoginForgetPassword';
import LoginForm from './LoginForm';
import LoginResetPassword from './LoginResetPassword';
import NotFound from '../NotFound';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) {
    return <Navigate to="/" />;
  }

  return (
    <section id="login">
      <div className="forms">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="recuperar" element={<LoginForgetPassword />} />
          <Route path="resetar" element={<LoginResetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;

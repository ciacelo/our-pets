import React from 'react';
import {
  tokenPost,
  tokenValidatePost,
} from '../services/endpoints/authService';
import { getUser } from '../services/endpoints/userService';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext(); //context API

export const UseStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const userLogout = React.useCallback(
    //NOTE: used in a useEffect
    async function userLogout() {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(null);
      window.localStorage.removeItem('token');
      navigate('/login');
    },
    [navigate]
  );

  async function userLogin({ username, password }) {
    try {
      setError(null);
      setLoading(true);

      const responseToken = await tokenPost({
        username,
        password,
      });
      if (responseToken.status !== 200)
        throw new Error(`${responseToken.data.message}`);
      const { token } = responseToken.data;
      window.localStorage.setItem('token', token);
      await userGet(token);
      navigate('/');
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  async function userGet(token) {
    // getUser
    let responseUser = await getUser({ TOKEN: token });
    const user = responseUser.data;
    setData(user);
    setLogin(true);
    console.log('User logado: ', user);
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLogin(null);
          setLoading(true);
          let response = await tokenValidatePost({ TOKEN: token });
          // console.log(response);
          if (response.status !== 200) throw new Error('token inv??lido');
          await userGet(token);
        } catch (error) {
          // console.log(error);
          userLogout(); //NOTE: a useCallback
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};

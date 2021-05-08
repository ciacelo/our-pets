import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { tokenPost } from '../../services/endpoints/authService';
import { getUser } from '../../services/endpoints/userService';
import Button from '../forms/Button';
import Input from '../forms/Input';
import { UserContext } from '../UserContext';
const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, loading, error } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      // let response = await tokenPost({ //TODO: reescrevendo essa função utilizando o contextAPI
      //   username: username.value,
      //   password: password.value,
      // });
      // console.log(response);
      // if (response.status === 200) {
      //   window.localStorage.setItem('token', response.data.token);
      // }
      userLogin({ username: username.value, password: password.value });
    }
    // console.log(response);
  }

  // React.useEffect(() => {
  //   if (error) {
  //     alert('Error: ', error);
  //   }
  // }, [error]);

  return (
    <section id="login-form">
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit}
        style={{ margin: '20px auto', maxWidth: '500px' }}
      >
        <Input
          label="Usuário"
          type="text"
          placeholder="usuário"
          name="username"
          {...username}
        />
        <Input
          label="Senha"
          type="password"
          placeholder="senha"
          name="password"
          {...password}
        />

        <div className="row-actions">
          <Button disabled={loading}>Entrar</Button>
          {error && (
            <p>
              <strong>{error}</strong>
            </p>
          )}
          <Link to="/login/criar">Criar uma conta?</Link>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;

import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import Button from '../forms/Button';
import Input from '../forms/Input';
import Error from '../helpers/Error';
import { UserContext } from '../UserContext';
const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, loading, error } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin({ username: username.value, password: password.value });
    }
  }

  return (
    <section id="login-form" className="animeLeft">
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit} style={{ margin: '20px auto' }}>
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
          {error && <Error error={error} />}
        </div>
      </form>
      <Link className="link-forget" to="/login/esqueceu">
        Esqueceu a senha?
      </Link>
      <div className="link-register">
        <h2 className="subtitle">Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className="button-form" to="/login/criar">
          Criar
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;

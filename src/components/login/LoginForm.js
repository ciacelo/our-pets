import React from 'react';
import { Link } from 'react-router-dom';
import { tokenPost } from '../../services/endpoints/authService';
import Button from '../forms/Button';
import Input from '../forms/Input';

const LoginForm = () => {
  const [formData, setFormData] = React.useState({
    username: '',
    password: '',
    email: '',
  });

  async function handleSubmit(event) {
    event.preventDefault();
    let response = await tokenPost({
      username: formData.username,
      password: formData.password,
    });
    console.log(response);
  }
  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{ margin: '20px auto' }}>
        <Input
          label="Usuário"
          type="text"
          placeholder="usuário"
          name="username"
          value={formData.username}
          onChange={({ target }) =>
            setFormData({ ...formData, username: target.value })
          }
        />
        <Input
          label="Senha"
          type="password"
          placeholder="senha"
          name="password"
          value={formData.password}
          onChange={({ target }) =>
            setFormData({ ...formData, password: target.value })
          }
        />

        <Button disabled={true}>Entrar</Button>
      </form>
      <Link to="/login/criar">Criar</Link>
    </section>
  );
};

export default LoginForm;

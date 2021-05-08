import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { tokenPost } from '../../services/endpoints/authService';
import Button from '../forms/Button';
import Input from '../forms/Input';

const LoginForm = () => {
  const username = useForm('email');
  const password = useForm();

  // console.log(username.validate());
  // const [formData, setFormData] = React.useState({
  //   username: '',
  //   password: '',
  //   email: '',
  // });

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      let response = await tokenPost({
        username: username,
        password: password,
      });
      console.log(response);
    }

    // console.log(response);
  }
  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{ margin: '20px auto' }}>
        <Input
          label="Usuário"
          type="email"
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

        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Criar</Link>
    </section>
  );
};

export default LoginForm;

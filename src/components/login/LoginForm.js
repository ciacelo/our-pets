import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { tokenPost } from '../../services/endpoints/authService';
import { getUser } from '../../services/endpoints/userService';
import Button from '../forms/Button';
import Input from '../forms/Input';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  // console.log(username.validate());
  // const [formData, setFormData] = React.useState({
  //   username: '',
  //   password: '',
  //   email: '',
  // });
  React.useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      handleGetUser(token);
    }
  }, []);

  async function handleGetUser(token) {
    let response = await getUser({
      TOKEN: token,
    });
    console.log('Dados do usuário: ', response);
  }
  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      let response = await tokenPost({
        username: username.value,
        password: password.value,
      });
      console.log(response);
      if (response.status === 200) {
        window.localStorage.setItem('token', response.data.token);
      }
    }

    // console.log(response);
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

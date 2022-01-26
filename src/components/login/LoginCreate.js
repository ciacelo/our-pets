import React from 'react';
import useForm from '../../hooks/useForm';
import { useRequest } from '../../hooks/useRequest';
import { postUser } from '../../services/endpoints/userService';
import Button from '../forms/Button';
import Input from '../forms/Input';
import Error from '../helpers/Error';
import Head from '../helpers/Head';
import { UserContext } from '../UserContext';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useRequest();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      let { response: responseRequest } = await request({
        requestAPI: postUser({
          email: email.value,
          username: username.value,
          password: password.value,
        }),
      });
      // console.log(responseRequest);
      if (responseRequest.status === 200)
        userLogin({ username: username.value, password: password.value });
    } catch (error) {
      console.log(error);
    }
    // console.log(response.data);
  }

  return (
    <section className="animeLeft">
      <Head title="Criar conta" />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        {error && <Error error={{ error: `${error}` }} />}
        {/* {error} */}
      </form>
    </section>
  );
};

export default LoginCreate;

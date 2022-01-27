import React from 'react';
import Input from '../forms/Input'
import Button from '../forms/Button'
import useForm from '../../hooks/useForm'
import { useRequest } from '../../hooks/useRequest';
import { passwordLostPost } from '../../services/endpoints/userService';
import Error from '../helpers/Error';
import Head from '../helpers/Head';

const LoginForget = () => {
  const login = useForm();
  const {data, loading, error, request} = useRequest()
  const href = window.location.href //pegando URL final

  async function handleSubmit(event) {
    event.preventDefault()
    if (login.validate()) {
      await request({
        requestAPI: passwordLostPost({
          login: login.value,
          url: href.replace('perdeu', 'resetar')
        })
      })
    }
  }

  return (
    <section className='animeLeft'>
      <Head title="Esqueceu a senha?" />
      <h1 className='title'>Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
      <form onSubmit={handleSubmit}>
        <Input label="Email / Usuário" type="text" name="email" {...login}/>
        {loading ?  (
          <Button disabled>Enviando...</Button>
        ):( 
          <Button>Enviar e-mail</Button>
        )}
      </form>
      )}
      {error && <Error error={error}/>}
    </section>
  )
};

export default LoginForget;

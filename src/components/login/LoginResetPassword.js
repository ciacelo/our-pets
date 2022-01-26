import React from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { useRequest } from '../../hooks/useRequest';
import { passwordResetPost } from '../../services/endpoints/userService';
import Button from '../forms/Button';
import Input from '../forms/Input';
import Error from '../helpers/Error';
import Head from '../helpers/Head';

const LoginResetPassword = () => {
  const [login, setLogin] = React.useState('')
  const [key, setKey] = React.useState('')
  const {loading, error, request} = useRequest()
  const password = useForm()
  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault()
    if (password.validate()) { 
      const { response } = await request({
        requestAPI: passwordResetPost({
          login,
          key,
          password: password.value,
        })
      })
      

      if (response.status === 200) {
        navigate('/login')
      }
    }
    
  }

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')
    if (key) setKey(key)
    if (login) setLogin(login)
  }, [])

  return (
    <section>
      <Head title="Recuperar senha" />
      <form onSubmit={handleSubmit}>
        <Input 
          label="Nova senha" 
          type="password" 
          name="password" 
          {...password} 
        />
        {loading ? (
          <Button>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      {error && <Error error={error} />}
    </section>
  );
};

export default LoginResetPassword;

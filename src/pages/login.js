import React from 'react';
import * as authServices from '../services/endpoints/authService';
const Login = () => {
  const [form, setForm] = React.useState({
    username: '',
    email: '',
    passowrd: '',
  });

  async function login({ username, email, password }) {
    let response = await authServices.tokenPost({ username, email, password });
    return response;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    let response = await login({ ...form });
    const { token } = response.data;
    localStorage.setItem('token', token);
    console.log(response);
  }

  return (
    <div style={{ margin: 'auto' }}>
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          maxWidth: '300px',
          margin: 'auto',
        }}
      >
        <input type="hidden" name="" value="" onChange={() => {}} />
        <input
          type="text"
          value={form.username}
          onChange={({ target }) =>
            setForm({ ...form, username: target.value })
          }
          placeholder="username"
        />
        <input
          type="email"
          value={form.email}
          onChange={({ target }) => setForm({ ...form, email: target.value })}
          placeholder="email"
          autoComplete="email"
        />
        <input
          type="password"
          value={form.password}
          onChange={({ target }) =>
            setForm({ ...form, password: target.value })
          }
          placeholder="password"
          autoComplete="password"
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Login;

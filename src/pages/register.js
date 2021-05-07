import React from 'react';
import * as userService from '../services/endpoints/userService';
const Register = () => {
  const [form, setForm] = React.useState({
    username: '',
    email: '',
    passowrd: '',
  });

  async function createUser({ username, email, password }) {
    let response = await userService.postUser({ username, email, password });
    return response;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    let response = await createUser({ ...form });
    console.log(response);
  }

  return (
    <div style={{ margin: 'auto' }}>
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
          autoComplete="off"
        />
        <input
          type="password"
          value={form.password}
          onChange={({ target }) =>
            setForm({ ...form, password: target.value })
          }
          placeholder="password"
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Register;

import api from '../api';

export const tokenPost = async ({ username, email, password }) => {
  let response = await api({
    method: 'POST',
    url: 'jwt-auth/v1/token',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      email,
      password,
      username,
    },
  });
  return response;
};

export const tokenValidatePost = async ({ TOKEN }) => {
  let response = await api({
    method: 'POST',
    url: 'jwt-auth/v1/token/validate',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  return response;
};

import api from '../api';

export const getUser = async ({ TOKEN }) => {
  let response = await api({
    url: 'api/user',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  return response;
};

export const postUser = async ({ username, email, password }) => {
  let response = await api({
    method: 'post',
    url: 'api/user',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      username,
      email,
      password,
    },
  });

  return response;
};

/* POST SERVICES */
export const commentPost = async ({ TOKEN, data, comment_id }) => {
  const { comment } = data;
  let response = await api({
    url: `api/comment/${comment_id}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    data: {
      comment,
    },
  });
  return response;
};

export const commentGet = async ({ comment_id }) => {
  let response = await api({
    url: `api/comment/${comment_id}`,
    method: 'GET',
  });
  return response;
};

// STATICS OF PHOTOS
export const statsGet = async ({ TOKEN }) => {
  let response = await api({
    url: 'api/stats',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  return response;
};

/* PASSWORD SERVICES */
export const passwordLostPost = async ({ login, url }) => {
  let response = await api({
    url: 'api/password/lost',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      login,
      url
    }
  });
  return response
};

export const passwordResetPost = async ({ login, key, password }) => {
  let response = await api({
    url: 'api/password/reset',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      login,
      key,
      password
    }
  });
  return response
};

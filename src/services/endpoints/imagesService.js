import api from '../api';

export const photoPost = async ({ TOKEN, formData }) => {
  let response = await api({
    url: 'api/photo',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-type': 'multipart/form-data',
    },
    data: formData, //FORMDATA,
  });
  return response;
};

export const photoGet = async ({ photo_id }) => {
  let response = await api({
    url: `api/photo/${photo_id}`,
    method: 'GET',
  });
  return response;
};

export const photosGet = async ({ page, total, user }) => {
  let response = await api({
    url: `api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    method: 'GET',
    cache: 'no-store',
  });
  return response;
};

export const photoDelete = async ({ TOKEN, photo_id }) => {
  let response = await api({
    url: `api/photo/${photo_id}`,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  return response;
};

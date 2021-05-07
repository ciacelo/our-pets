import api from '../api';

export const photoPost = async ({ TOKEN, data }) => {
  const { img, nome, peso, idade } = data;
  let response = await api({
    url: 'api/photo',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    data: {
      img, //FORM_DATA
      nome,
      peso,
      idade,
    },
  });
  return response;
};

export const photoGet = async ({ photo_query, photo_id }) => {
  const { total, page, user } = photo_query;
  let response = await api({
    url: {
      photos: 'api/photo',
      photos_query: `api/photo/?_total=${total}&_page=${page}&_user=${user}`,
      photo: `api/photo/${photo_id}`,
    },
    method: 'GET',
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

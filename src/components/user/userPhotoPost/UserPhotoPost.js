import React from 'react';
import './style.scss';
import Input from '../../forms/Input';
import Button from '../../forms/Button';
import Error from '../../helpers/Error';
import useForm from '../../../hooks/useForm';
import { useRequest } from '../../../hooks/useRequest';
import { photoPost } from '../../../services/endpoints/imagesService';
import { useNavigate } from 'react-router';

const UserPhotoPost = () => {
  const name = useForm();
  const weight = useForm('number');
  const age = useForm('number');
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useRequest();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate]);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', name.value);
    formData.append('peso', weight.value);
    formData.append('idade', age.value);
    // formData.append('img', igm.raw)
    const token = window.localStorage.getItem('token');

    console.log('enviando: ', formData);
    const { response } = await request({
      requestAPI: photoPost({
        TOKEN: token,
        formData,
      }),
    });
    console.log(response);
  }

  function handleImgChange({ target }) {
    console.log(target.files);
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section id="user-photo-post-component" className="photoPost animeLeft">
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="name" {...name} />
        <Input label="Peso" type="number" name="weight" {...weight} />
        <Input label="Idade" type="number" name="age" {...age} />
        <input
          className="image-input"
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error />
      </form>
      <div>
        {img.preview && (
          <div
            className="preview"
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;

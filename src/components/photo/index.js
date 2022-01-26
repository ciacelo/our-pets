import React from 'react';
import { useParams } from 'react-router';
import { useRequest } from '../../hooks/useRequest';
import { photoGet } from '../../services/endpoints/imagesService';
import Error from '../helpers/Error';
import Head from '../helpers/Head';
import Loading from '../helpers/loading';
import PhotoContent from './photoContent';

const Photo = () => {
  const { id } = useParams()
  const {data, error, loading, request} = useRequest()

  React.useEffect(() => {
    request({
      requestAPI: photoGet({ photo_id: id })
    })
  }, [request, id])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <section className="container mainContainer" >
        <Head title={data.photo.title} />
        <PhotoContent data={data} single={true} />
      </section>
    );
  else return null
};

export default Photo;

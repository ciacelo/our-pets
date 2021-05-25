import React from 'react';
import { useRequest } from '../../hooks/useRequest';
import { photosGet } from '../../services/endpoints/imagesService';
import FeedPhotosItem from './FeedPhotosItem';
import Error from '../helpers/Error';
import Loading from '../helpers/Loading';

const FeedPhotos = () => {
  const { data, loading, error, request } = useRequest();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { response, data } = await request({
        requestAPI: photosGet({
          page: 1,
          total: 10,
          user: 0,
        }),
      });
      console.log(response, data);
    }

    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <div>
        <FeedPhotosItem />
      </div>
    );
  else return null;
};

export default FeedPhotos;

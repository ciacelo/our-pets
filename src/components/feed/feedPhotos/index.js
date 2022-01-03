import React from 'react';
import './styles.scss';
import { useRequest } from '../../../hooks/useRequest';
import { photosGet } from '../../../services/endpoints/imagesService';
import FeedPhotosItem from '../feedPhotoItem';
import Error from '../../helpers/Error';
import Loading from '../../helpers/loading';

const FeedPhotos = ({ setModalPhoto }) => {
  const { data, loading, error, request } = useRequest();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { data } = await request({
        requestAPI: photosGet({
          page: 1,
          total: 20,
          user: 0,
        }),
      });
      console.log(data);
    }

    fetchPhotos();
  }, [request]);
  if (error) return <Error error={error} />;

  if (loading) return <Loading />;
  if (data)
    return (
      <ul id="feed-photos-component" className="feed animeLeft">
        {data.map(photo => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;

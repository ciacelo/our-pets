import React from 'react';
import './styles.scss';
import { useRequest } from '../../../hooks/useRequest';
import { photosGet } from '../../../services/endpoints/imagesService';
import FeedPhotosItem from '../feedPhotoItem';
import Error from '../../helpers/Error';
import Loading from '../../helpers/loading';

const FeedPhotos = ({ page, user, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useRequest();

  React.useEffect(() => {
    async function fetchPhotos() {
      let total = 3
      const { response, data } = await request({
        requestAPI: photosGet({
          page,
          total,
          user,
        }),
      });

      if (response && response.status === 200 && data.length < total) {
        setInfinite(false)
      }
      console.log(data);
    }

    fetchPhotos();
  }, [request, page, user, setInfinite]);
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

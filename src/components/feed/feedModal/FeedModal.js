import React from 'react';

import './feedModal.scss';
import { useRequest } from '../../../hooks/useRequest';
import { photoGet } from '../../../services/endpoints/imagesService';
import Error from '../../helpers/Error';
import Loading from '../../helpers/loading';
import PhotoContent from '../../photo/photoContent';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useRequest();

  React.useEffect(() => {
    async function getPhoto() {
      const { data } = request({
        requestAPI: photoGet({ photo_id: photo.id }),
      });
      return data;
    }
    getPhoto();
  }, [photo, request]);

  function handleOutSideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <div
      id="feed-modal-component"
      className="container-modal"
      onClick={handleOutSideClick}
    >
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;

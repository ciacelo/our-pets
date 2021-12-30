import React from 'react';
import Image from '../../helpers/image';
import './styles.scss';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleSelectPhoto() {
    setModalPhoto(photo);
  }
  return (
    <li
      id="feed-photo-item-component"
      className="photo"
      onClick={handleSelectPhoto}
    >
      <Image src={photo.src} alt={photo.title} />
      <span className="visualization">{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;

import React from 'react';
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
      <img src={photo.src} alt={photo.title} />
      <span className="visualization">{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;

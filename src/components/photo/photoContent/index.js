import React from 'react';
import { Link } from 'react-router-dom';
import PhotoComments from '../photoComments';

import './styles.scss';

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;
  return (
    <div id="photo-content-component" className="photo">
      <div className="img">
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className="details">
        <div>
          <p className="author">
            <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
            <span className="views">{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className="attributes">
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade} {photo.idade === '1' ? 'ano' : 'anos'}
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;

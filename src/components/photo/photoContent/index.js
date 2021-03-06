import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../helpers/image';
import { UserContext } from '../../UserContext';
import PhotoComments from '../photoComments';
import PhotoDelete from '../photoDelete';

import './styles.scss';

const PhotoContent = ({ data, single = false }) => {
  const user = React.useContext(UserContext)
  const { photo, comments } = data;

  return (
    <div id="photo-content-component" className={`photo ${single ? 'single' : ''}`}>
      <div className="img">
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className="details">
        <div>
          <p className="author">
            {user.data && user.data.username === photo.author ? (
            <PhotoDelete id={photo.id} />
             ) : (
              <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
             )}
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

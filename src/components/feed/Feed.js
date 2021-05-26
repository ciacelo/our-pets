import React from 'react';
import './feed.scss';
import FeedModal from './FeedModal';
import FeedPhotos from './feedPhotos';

const Feed = () => {
  return (
    <div id="feed-component">
      <FeedModal />
      <FeedPhotos />
    </div>
  );
};

export default Feed;

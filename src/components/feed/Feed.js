import React from 'react';
import './feed.scss';
import FeedModal from './feedModal/FeedModal';
import FeedPhotos from './feedPhotos';

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1, 2]);
  const [infinite, setInfinite] = React.useState(true)

  React.useEffect(() => {
    let wait = false
    function infiniteScroll(event) {
      if (infinite) {
        const scroll = window.scrollY
        const height = document.body.offsetHeight - window.innerHeight
        if (scroll > height * .75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1])
          wait = true
          setTimeout(() => {
            wait = false
          }, 500)
          console.log(event)

        }
      }
    }

    window.addEventListener('wheel', infiniteScroll)
    window.addEventListener('scroll', infiniteScroll)

    return () => {
      window.removeEventListener('wheel', infiniteScroll)
      window.removeEventListener('scroll', infiniteScroll)
    }
  }, [infinite])

  return (
    <div id="feed-component">
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map(page => (
        <FeedPhotos 
          key={page} 
          page={page} 
          user={user} 
          setModalPhoto={setModalPhoto} 
          setInfinite={setInfinite}
        />
      ))}
    </div>
  );
};

export default Feed;

import React from 'react';

import './styles.scss';
import { UserContext } from '../../UserContext';
import PhotoCommentsForm from '../photoCommentsForm';

const PhotoComments = ({ id, comments }) => {
  const [commentList, setCommentList] = React.useState(() => comments)
  const commentSection = React.useRef(null)
  const { login } = React.useContext(UserContext)

  React.useEffect(() => {
    commentSection.current.scrollTop = commentSection.current.scrollHeight
  }, [commentList])

  return ( 
    <>
      <ul ref={commentSection} id="photo-comments-component">
        {commentList.map(comment => 
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>  
        )}
      </ul>
      {login &&
        <PhotoCommentsForm id={id} setCommentList={setCommentList}/>
      }
    </>
  );
};

export default PhotoComments;

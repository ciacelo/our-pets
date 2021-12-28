import React from 'react'

import './styles.scss'
import { ReactComponent as Enviar } from '../../../assets/enviar.svg'
import { useRequest } from '../../../hooks/useRequest'
import { commentPost } from '../../../services/endpoints/userService'
import Error from '../../helpers/Error'

const PhotoCommentsForm = ({ id, setCommentList }) => {
  const [comment, setComment] = React.useState('')
  const {request, error} = useRequest()
  const token = window.localStorage.getItem('token');

  
  async function handlerSubmit(event) {
    event.preventDefault()
    const { response, data } = await request({
      requestAPI: commentPost({ 
        comment_id: id, 
        data: {comment}, 
        TOKEN: token 
      })
    })
    console.log('response: ', response, response.ok, data)
    if (response.status === 200) {
      setComment('')
      setCommentList((comments) => [...comments, data])
    }
  }

  return (
    <form 
      id="photo-comments-form-component"
      onSubmit={handlerSubmit}
    >
      <textarea
        id="comment"
        name="comment"
        placeholder="Deixe seu comentário..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button>
        <Enviar />
      </button>
      {error &&
        <Error error={error} />
      }
    </form>
  )
}

export default PhotoCommentsForm

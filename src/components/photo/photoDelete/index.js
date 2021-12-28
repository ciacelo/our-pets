import React from 'react'
import { useRequest } from '../../../hooks/useRequest'
import { photoDelete } from '../../../services/endpoints/imagesService'
import './styles.scss'

const PhotoDelete = ({ id }) => {
  const {request, loading} = useRequest()
  const token = window.localStorage.getItem('token')

  async function handleDelete(event) {
    const confirm = window.confirm('Tem certeza que deseja deletar?')
    if (confirm) {
      const {response, data} = await request({
        requestAPI: photoDelete({ 
          TOKEN: token, 
          photo_id: id 
        })
      })
      if (response.status === 200) {
        window.location.reload()
      }
    }
  }

  return (
    <>
      <button id="photo-delete-component" onClick={handleDelete}>{loading? 'Deletando...' : 'Deletar'}</button>
    </>
  )
}

export default PhotoDelete

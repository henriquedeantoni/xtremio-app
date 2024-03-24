import { useNavigate } from 'react-router-dom'

import { getImages } from '../../utils/getImages'
import { Button, Container } from './styles'

function Card({ item, details, width, height }) {
  // window.location.reload(true)
  const navigate = useNavigate()

  const sendToPage = (item) => {
    navigate(`/detalhe/${item}`)
    window.location.reload(true)
  }

  return (
    <Container style={{ height: `${height}px` }}>
      <img
        src={getImages(item.poster_path || item.profile_path || '')}
        width={width}
        height={height}
      />
      <div>
        <h3>{item.original_title || item.name}</h3>
        {details && (
          <Button onClick={() => sendToPage(item.id)}>+ Detalhes</Button>
        )}
      </div>
    </Container>
  )
}

export default Card

//        <Button onClick={() => navigate(`/detalhe/${item.id}`)}>

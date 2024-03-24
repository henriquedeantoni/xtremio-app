import { useEffect, useState } from 'react'

import { getMovieVideos } from '../../services/getData'
import { Background, Container } from './styles'

function Modal({ movieId, setShowModal }) {
  // console.log(movieId)
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    async function getMovies() {
      console.log(await getMovieVideos(movieId))
      setMovie(await getMovieVideos(movieId))
    }

    if (movieId) {
      getMovies()
    }
  }, [movieId])

  return (
    <Background onClick={() => setShowModal(false)}>
      {movie && (
        <Container>
          <iframe
            src={`https://www.youtube.com/embed/${movie[0].key}`}
            title="Youtube Video Player"
            height="500px"
            width="100%"
          ></iframe>
        </Container>
      )}
    </Background>
  )
}

export default Modal

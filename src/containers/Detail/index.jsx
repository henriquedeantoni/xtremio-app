import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Slider from '../../components/Slider'
import SpanGenres from '../../components/SpanGenres'
import {
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideos,
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import {
  Container,
  Background,
  Cover,
  Info,
  ContainerMovies,
  Message,
  TextDescription,
  ContainerCredits,
  PageContainer,
} from './styles'

function Detail() {
  const { id } = useParams()
  const [movie, setMovie] = useState()
  const [movieVideos, setMovieVideos] = useState()
  const [movieSimilar, setMovieSimilar] = useState()
  const [movieCredits, setMovieCredits] = useState()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovieById(id),
        getMovieVideos(id),
        getMovieSimilar(id),
        getMovieCredits(id),
      ])
        .then(([movie, videos, Similar, credits]) => {
          setMovie(movie)
          setMovieVideos(videos)
          setMovieSimilar(Similar)
          setMovieCredits(credits)
        })
        .catch((error) => console.log(error))
    }

    getAllData()
  }, [])

  return (
    <>
      {movie && (
        <PageContainer>
          <Background image={getImages(movie.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImages(movie.poster_path)} />
            </Cover>
            <Info>
              <h2>{movie.title || 'Não Disponível'}</h2>
              <SpanGenres genres={movie.genres} />
              <h3>Sinopse</h3>
              <TextDescription>
                {movie.overview || 'Não Disponível'}
              </TextDescription>
              <p>Lançamento: {movie.release_date}</p>
              <p>Duração: {movie.runtime} minutos</p>
              <p>Rating: {movie.vote_avarage || 0.0}</p>
              <p>Quantidade de votos: {movie.vote_count}</p>
            </Info>
          </Container>
          <ContainerCredits>
            <Slider info={movieCredits} title={'Créditos'} details={false} />
          </ContainerCredits>

          <ContainerMovies>
            {movieVideos &&
              movieVideos.map((video) => (
                <div key={video.id}>
                  <h4>{video.name}</h4>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="Video Player"
                    height="500px"
                    width="100%"
                  ></iframe>
                </div>
              ))}
          </ContainerMovies>
          {!movieSimilar ? (
            <Message>Sem Similares</Message>
          ) : (
            <Slider
              info={movieSimilar}
              title={'Filmes Similares'}
              details={true}
            />
          )}
        </PageContainer>
      )}
    </>
  )
}

export default Detail

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import LateralMenu from '../../components/LateralMenu'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import {
  getMovies,
  getPopularSeries,
  getTopMovies,
  getTopPeople,
  getTopSeries,
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import {
  Background,
  Container,
  ContainerButtons,
  Info,
  PageContainer,
  Poster,
  ScreenMovies,
} from './styles'

function Home() {
  const [showModal, setShowModal] = useState(false)
  const [movie, setMovie] = useState()
  const [topMovies, setTopMovies] = useState()
  const [topSeries, setTopSeries] = useState()
  const [popularSeries, setPopularSeries] = useState()
  const [topPeople, setTopPeople] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPopularSeries(),
        getTopPeople(),
      ])
        .then(([movie, topMovies, topSeries, popularSeries, topPeople]) => {
          setMovie(movie)
          setTopMovies(topMovies)
          setTopSeries(topSeries)
          setPopularSeries(popularSeries)
          setTopPeople(topPeople)
        })
        .catch((error) => console.log(error))
    }
    getAllData()
  }, [])

  return (
    <>
      <PageContainer>
        <LateralMenu></LateralMenu>
        <ScreenMovies>
          {movie && (
            <Background $img={getImages(movie.backdrop_path)}>
              {showModal && (
                <Modal movieId={movie.id} setShowModal={setShowModal} />
              )}
              <Container>
                <Info>
                  <h1>{movie.title}</h1>
                  <p>{movie.overview}</p>
                  <ContainerButtons>
                    <Button
                      isRed={true}
                      onClick={() => navigate(`/detalhe/${movie.id}`)}
                    >
                      Assista Agora
                    </Button>
                    <Button onClick={() => setShowModal(true)} isRed={false}>
                      Assista o Trailer
                    </Button>
                  </ContainerButtons>
                </Info>
                <Poster>
                  <img src={getImages(movie.poster_path)} alt="capa-do-filme" />
                </Poster>
              </Container>
            </Background>
          )}
          {topMovies && (
            <Slider info={topMovies} title={'Top Filmes'} details={true} />
          )}
          {topSeries && (
            <Slider info={topSeries} title={'Top Séries'} details={true} />
          )}
          {popularSeries && (
            <Slider
              info={popularSeries}
              title={'Séries Populares'}
              details={true}
            />
          )}
          {topPeople && (
            <Slider
              info={topPeople}
              title={'Artistas mais Populares'}
              details={false}
            />
          )}
        </ScreenMovies>
      </PageContainer>
    </>
  )
}

export default Home

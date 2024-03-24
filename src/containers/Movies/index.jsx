import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import LateralMenuMovie from '../../components/LateralMenuMovie'
import ResultDisplay from '../../components/ResultDisplay'
import { getMovieGenres } from '../../services/getData'
import { Container, PageContainer } from './styles'

function Movies() {
  const [movieGenres, setMovieGenres] = useState()
  const [mediaList, setMediaList] = useState([])
  const [resetComponent, setResetComponent] = useState(true)

  console.log('resetComponent1' + resetComponent)

  useEffect(() => {
    async function getAllData() {
      Promise.all([getMovieGenres()])
        .then(([listResult]) => {
          setMovieGenres(listResult)
        })
        .catch((error) => console.log(error))
    }
    getAllData()
  }, [])

  console.log(movieGenres)
  console.log(mediaList)

  return (
    <>
      <PageContainer>
        <Header></Header>
        <Container>
          <LateralMenuMovie
            genres={movieGenres}
            setMediaList={setMediaList}
            setResetComponent={setResetComponent}
          ></LateralMenuMovie>
          <ResultDisplay
            mediaList={mediaList}
            resetComponent={resetComponent}
          ></ResultDisplay>
        </Container>
      </PageContainer>
    </>
  )
}

export default Movies

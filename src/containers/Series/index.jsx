import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import LateralMenuSeries from '../../components/LateralMenuSeries'
import ResultDisplay from '../../components/ResultDisplay'
import { getSeriesGenres } from '../../services/getData'
import { Container, PageContainer } from './styles'

function Series() {
  const [seriesGenres, setSeriesGenres] = useState()
  const [mediaList, setMediaList] = useState([])
  const [resetComponent, setResetComponent] = useState(true)

  console.log('resetComponent: ' + resetComponent)

  useEffect(() => {
    async function getAllData() {
      Promise.all([getSeriesGenres()])
        .then(([listResult]) => {
          setSeriesGenres(listResult)
        })
        .catch((error) => console.log(error))
    }
    getAllData()
  }, [])

  console.log(seriesGenres)
  return (
    <>
      <PageContainer>
        <Header></Header>
        <Container>
          <LateralMenuSeries
            genres={seriesGenres}
            setMediaList={setMediaList}
            setResetComponent={setResetComponent}
          ></LateralMenuSeries>
          <ResultDisplay
            mediaList={mediaList}
            resetComponent={resetComponent}
          ></ResultDisplay>
        </Container>
      </PageContainer>
    </>
  )
}

export default Series

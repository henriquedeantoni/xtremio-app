import Card from '../Card'
import PageIndexDiv from '../PageIndexDiv'
import { Container, ContainerResults } from './styles'

function ResultDisplay({ mediaList, resetComponent }) {
  console.log(mediaList)
  console.log(mediaList.length)
  return (
    <Container>
      <PageIndexDiv resetComponent={resetComponent}></PageIndexDiv>
      <ContainerResults>
        {mediaList &&
          mediaList.map((movie) => (
            <Card
              key={movie.id}
              item={movie}
              width={'170px'}
              height={'215px'}
              details={true}
            ></Card>
          ))}
      </ContainerResults>
    </Container>
  )
}

export default ResultDisplay

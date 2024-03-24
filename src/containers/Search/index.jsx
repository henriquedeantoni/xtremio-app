import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import ButtonSearch from '../../components/ButtonSearch'
import Card from '../../components/Card'
import PageIndexDiv from '../../components/PageIndexDiv'
import { getSearchByKeyowrd } from '../../services/getData'
import { Container, Header, Input, InputDiv, ResultContainer } from './styles'
// import { useParams } from 'react-router-dom'

function Search() {
  const isClicked = JSON.parse(localStorage.getItem('querySearchDone'))

  const { queryword } = useParams()
  const [searchByKeyowrd, setSearchByKeyowrd] = useState('')
  const [inputValue, setInputValue] = useState(queryword)
  const [buttonClicked, setButtonClicked] = useState(isClicked)
  const navigate = useNavigate()

  const page = JSON.parse(localStorage.getItem('localPage'))

  // setInputValue(queryword)

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  /* const handlePageClick = (event) => {
    setButtonClicked(true)
    navigate(`/busca/${inputValue}`)
  } */

  const handleButtonClick = (event) => {
    setButtonClicked(true)
    navigate(`/busca/${inputValue}`)
  }

  useEffect(() => {
    if (buttonClicked) {
      async function getAllData() {
        Promise.all([getSearchByKeyowrd(page, inputValue)])
          .then(([listResult]) => {
            setSearchByKeyowrd(listResult)
          })
          .catch((error) => console.log(error))
      }
      getAllData()
    }
    setButtonClicked(false)
  }, [inputValue, buttonClicked])

  return (
    <>
      <Container>
        <Header>
          <InputDiv>
            <Input
              onChange={handleChange}
              value={inputValue}
              placeholder="Digite sua busca.."
              type="text"
            ></Input>
            <ButtonSearch onClick={handleButtonClick}>Buscar</ButtonSearch>
          </InputDiv>
          <h2>Principais Resultados do termo: {inputValue} </h2>
        </Header>
        <PageIndexDiv onClick={handleButtonClick}></PageIndexDiv>
        <ResultContainer>
          {searchByKeyowrd &&
            searchByKeyowrd.map((result, index) => (
              <Card key={index} item={result} height={'240px'} details={true} />
            ))}
        </ResultContainer>
      </Container>
    </>
  )
}

export default Search

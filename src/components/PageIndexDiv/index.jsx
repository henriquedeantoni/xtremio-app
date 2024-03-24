import { useEffect, useState } from 'react'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import { Container, Number } from './styles'

function PageIndexDiv({ onClick, resetComponent }) {
  const [pageSelected, setPageSelect] = useState(1)
  // console.log('resetComponent: ' + resetComponent)
  useEffect(() => {
    if (resetComponent) {
      setPageSelect(1)
    }
  }, [resetComponent])

  useEffect(() => {
    const localPage = localStorage.getItem('localPage')
    setPageSelect(localPage ? parseInt(localPage) : 1)
  }, [])

  const rangeIndex = 10
  const indexInitial =
    Math.ceil(pageSelected / rangeIndex) * rangeIndex - rangeIndex + 1

  const numbersToRender = Array.from(
    { length: rangeIndex },
    (_, index) => index + indexInitial,
  )

  function changePage(isReturn, initialValue) {
    setPageSelect((prevPage) => {
      const newValue = isReturn ? prevPage - 1 : prevPage + 1
      return newValue
    })

    localStorage.setItem('localPage', pageSelected)
  }

  useEffect(() => {
    async function updatePage() {
      if (localStorage.getItem('localPage') === 1) {
        setPageSelect(localStorage.getItem('localPage'))
      }
    }
    updatePage()
  }, [pageSelected])

  function selectPage(pageValue) {
    setPageSelect(pageValue)
    localStorage.setItem('localPage', pageValue)
  }

  console.log('pageSelected: ' + pageSelected)

  return (
    <>
      <Container onClick={onClick}>
        {pageSelected > 1 && (
          <ArrowBackIosNewIcon
            sx={{ color: '#ffffff', cursor: 'pointer', margin: '10px' }}
            onClick={() => changePage(true, pageSelected)}
          />
        )}

        {pageSelected &&
          pageSelected > 0 &&
          numbersToRender.map((number, index) => (
            <Number
              key={index}
              pageIndex={number}
              value={pageSelected}
              onClick={() => selectPage(number)}
            >
              {number}
            </Number>
          ))}
        <ArrowForwardIosIcon
          sx={{ color: '#ffffff', cursor: 'pointer', margin: '10px' }}
          onClick={() => changePage(false, pageSelected)}
          updatePage={() => localStorage.setItem('localPage', pageSelected)}
        />
      </Container>
    </>
  )
}

export default PageIndexDiv

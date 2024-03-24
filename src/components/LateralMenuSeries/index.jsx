import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import GroupsIcon from '@mui/icons-material/Groups'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import TodayIcon from '@mui/icons-material/Today'

import logo from '../../assets/arrow_icon.svg'
import {
  getSerieByGenre,
  getSerieSearch,
  getSeriesAirToday,
  getSeriesMostPopular,
  getSeriesOnTheAir,
  getSeriesTopRated,
} from '../../services/getData'
import { theme } from '../../utils/themes'
import ButtonSearch from '../ButtonSearch'
import {
  ArrowBackIcon,
  ArrowImage,
  Container,
  ContainerItems,
  DivButton,
  DivLine,
  Input,
  Li,
  LiGenre,
  Menu,
  MenuGenres,
} from './styles'

function LateralMenuSeries({ genres, setMediaList, setResetComponent }) {
  const [inputValue, setInputValue] = useState('')
  const [changeLateral, setChangeLateral] = useState(true)
  const [genreId, setGenreId] = useState(0)
  const [key, setKey] = useState(0)
  const [pageIndex, setPageIndex] = useState(1)

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleButtonClick = (event) => {
    setKey(inputValue)
    localStorage.setItem('querySearchDone', JSON.stringify(true))
  }

  const page = JSON.parse(localStorage.getItem('localPage'))

  const handleGenreClick = (serieGenreId) => {
    // localStorage.setItem('localPage', 1)
    setPageIndex(1)
    setGenreId(serieGenreId)
  }

  const handleClick = () => {
    setPageIndex(JSON.parse(localStorage.getItem('localPage')))
  }

  useEffect(() => {
    // const containerScreen = document.getElementById('myContainerScreen')
    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])

  useEffect(() => {
    async function getAllData() {
      Promise.all([getSerieByGenre(pageIndex, genreId)])
        .then(([listResult]) => {
          setResetComponent(true)
          setMediaList(listResult)
        })
        .catch((error) => console.log(error))
    }
    getAllData()
  }, [genreId, page])

  useEffect(() => {
    async function fetchData(key) {
      switch (key) {
        case 'airToday':
          try {
            // localStorage.setItem('localPage', 1)
            const [listResult] = await Promise.all([
              getSeriesAirToday(pageIndex),
            ])
            setMediaList(listResult)
          } catch (error) {
            console.log(error)
          }
          break
        case 'onTheAir':
          try {
            // localStorage.setItem('localPage', 1)
            const [listResult] = await Promise.all([
              getSeriesOnTheAir(pageIndex),
            ])
            setMediaList(listResult)
          } catch (error) {
            console.log(error)
          }
          break
        case 'mostPopular':
          try {
            // localStorage.setItem('localPage', 1)
            const [listResult] = await Promise.all([
              getSeriesMostPopular(pageIndex),
            ])
            setMediaList(listResult)
          } catch (error) {
            console.log(error)
          }
          break
        case 'topRated':
          try {
            // localStorage.setItem('localPage', 1)
            const [listResult] = await Promise.all([
              getSeriesTopRated(pageIndex),
            ])
            setMediaList(listResult)
          } catch (error) {
            console.log(error)
          }
          break
        case key:
          try {
            // localStorage.setItem('localPage', 1)
            const [listResult] = await Promise.all([
              getSerieSearch(pageIndex, key),
            ])
            setMediaList(listResult)
          } catch (error) {
            console.log(error)
          }
      }
    }
    fetchData(key)
  }, [key])

  const handleResetComponent = () => {
    setResetComponent(true)

    setTimeout(() => {
      setResetComponent(false)
    }, 200)
  }

  console.log(key)
  console.log(pageIndex)

  return (
    <Container>
      <ContainerItems isOpen={changeLateral}>
        {changeLateral && (
          <>
            <Menu>
              <Li className="input-section">
                <Input onChange={handleChange} type="text"></Input>
                <ButtonSearch onClick={handleButtonClick}>Buscar</ButtonSearch>
              </Li>
              <Li
                onClick={() => {
                  setKey('airToday')
                  localStorage.setItem('localPage', 1)
                  handleResetComponent()
                }}
              >
                <TodayIcon
                  sx={{ color: theme.colors.whiteFont, fontSize: 20 }}
                />
                <Link>Estreia Hoje</Link>
              </Li>
              <Li
                onClick={() => {
                  setKey('onTheAir')
                  localStorage.setItem('localPage', 1)
                  handleResetComponent()
                }}
              >
                <LiveTvIcon
                  sx={{ color: theme.colors.whiteFont, fontSize: 20 }}
                />
                <Link>No Ar</Link>
              </Li>
              <Li
                onClick={() => {
                  setKey('mostPopular')
                  localStorage.setItem('localPage', 1)
                  handleResetComponent()
                }}
              >
                <GroupsIcon
                  sx={{ color: theme.colors.whiteFont, fontSize: 20 }}
                />
                <Link>Mais Populares</Link>
              </Li>
              <Li
                onClick={() => {
                  setKey('mostPopular')
                  localStorage.setItem('localPage', 1)
                  handleResetComponent()
                }}
              >
                <ThumbUpIcon
                  sx={{ color: theme.colors.whiteFont, fontSize: 20 }}
                />
                <Link>Maior ranking</Link>
              </Li>
            </Menu>
            <DivLine></DivLine>
            <MenuGenres>
              {genres &&
                genres.map((serieGenre, index) => (
                  <LiGenre
                    key={index}
                    value={serieGenre.id}
                    onClick={() => {
                      handleGenreClick(serieGenre.id)
                      handleResetComponent()
                    }}
                  >
                    {serieGenre.name}
                  </LiGenre>
                ))}
            </MenuGenres>
          </>
        )}
      </ContainerItems>

      <DivButton>
        <ArrowBackIcon
          onClick={() =>
            !changeLateral ? setChangeLateral(true) : setChangeLateral(false)
          }
        >
          <ArrowImage
            src={logo}
            alt="logo-icon-arrow"
            direction={changeLateral}
          />
        </ArrowBackIcon>
      </DivButton>
    </Container>
  )
}

export default LateralMenuSeries

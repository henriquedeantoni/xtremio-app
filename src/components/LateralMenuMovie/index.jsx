import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor'
import GroupsIcon from '@mui/icons-material/Groups'
import TheatersIcon from '@mui/icons-material/Theaters'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'

import logo from '../../assets/arrow_icon.svg'
import {
  getMostPopular,
  getMostWatched,
  getMovieByGenre,
  getMovieSearch,
  getNowPlaying,
  getUpComing,
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

function LateralMenuMovie({ genres, setMediaList, setResetComponent }) {
  const [inputValue, setInputValue] = useState('')
  const [changeLateral, setChangeLateral] = useState(true)
  const [genreId, setGenreId] = useState(0)
  const [key, setKey] = useState(0)
  const [pageIndex, setPageIndex] = useState(1)

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleButtonClick = (event) => {
    if (inputValue !== '') {
      setKey(inputValue)
      localStorage.setItem('querySearchDone', JSON.stringify(true))
    }
  }

  const page = JSON.parse(localStorage.getItem('localPage'))

  const handleGenreClick = (movieGenreId) => {
    // localStorage.setItem('localPage', 1)
    setPageIndex(1)
    setGenreId(movieGenreId)
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
      Promise.all([getMovieByGenre(pageIndex, genreId)])
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
        case 'mostWatched':
          try {
            // localStorage.setItem('localPage', 1)
            const [listResult] = await Promise.all([getMostWatched(pageIndex)])
            setMediaList(listResult)
          } catch (error) {
            console.log(error)
          }
          break
        case 'nowPlaying':
          try {
            // localStorage.setItem('localPage', 1)
            const [listResult] = await Promise.all([getNowPlaying(pageIndex)])
            setMediaList(listResult)
          } catch (error) {
            console.log(error)
          }
          break
        case 'upComing':
          try {
            // localStorage.setItem('localPage', 1)
            const [listResult] = await Promise.all([getUpComing(pageIndex)])
            setMediaList(listResult)
          } catch (error) {
            console.log(error)
          }
          break
        case 'mostPopular':
          try {
            // localStorage.setItem('localPage', 1)
            const [listResult] = await Promise.all([getMostPopular(pageIndex)])
            setMediaList(listResult)
          } catch (error) {
            console.log(error)
          }
          break
        case key:
          try {
            // localStorage.setItem('localPage', 1)
            const [listResult] = await Promise.all([
              getMovieSearch(pageIndex, key),
            ])
            setMediaList(listResult)
          } catch (error) {
            console.log(error)
          }
      }
    }
    fetchData(key)
  }, [key])

  console.log(key)
  console.log(pageIndex)

  const handleResetComponent = () => {
    setResetComponent(true)

    setTimeout(() => {
      setResetComponent(false)
    }, 200)
  }

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
                  setKey('mostWatched')
                  localStorage.setItem('localPage', 1)
                  handleResetComponent()
                }}
              >
                <ThumbUpIcon
                  sx={{ color: theme.colors.whiteFont, fontSize: 20 }}
                />
                <Link>Mais Assistidos</Link>
              </Li>
              <Li
                onClick={() => {
                  setKey('nowPlaying')
                  localStorage.setItem('localPage', 1)
                  handleResetComponent()
                }}
              >
                <TheatersIcon
                  sx={{ color: theme.colors.whiteFont, fontSize: 20 }}
                />
                <Link>Lançamentos</Link>
              </Li>
              <Li
                onClick={() => {
                  setKey('upComing')
                  localStorage.setItem('localPage', 1)
                  handleResetComponent()
                }}
              >
                <CameraOutdoorIcon
                  sx={{ color: theme.colors.whiteFont, fontSize: 20 }}
                />
                <Link>Em Breve</Link>
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
            </Menu>
            <DivLine></DivLine>
            <MenuGenres>
              {genres &&
                genres.map((movieGenre, index) => (
                  <LiGenre
                    key={index}
                    value={movieGenre.id}
                    onClick={() => {
                      handleGenreClick(movieGenre.id)
                      handleResetComponent()
                    }}
                  >
                    {movieGenre.name}
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

export default LateralMenuMovie

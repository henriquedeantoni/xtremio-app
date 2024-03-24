import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import HomeIcon from '@mui/icons-material/Home'
import ListAltIcon from '@mui/icons-material/ListAlt'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import SettingsIcon from '@mui/icons-material/Settings'
import TheatersIcon from '@mui/icons-material/Theaters'

import logo from '../../assets/arrow_icon.svg'
import { theme } from '../../utils/themes'

// import { HomeIconCustom } from '../../utils/muiIcons'

import ButtonSearch from '../ButtonSearch'
import {
  ArrowBackIcon,
  ArrowImage,
  Container,
  ContainerItems,
  DivButton,
  Input,
  Li,
  Menu,
} from './styles'

function LateralMenu() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const [inputValue, setInputValue] = useState('')
  const [changeLateral, setChangeLateral] = useState(true)

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleButtonClick = (event) => {
    const valueLocal = inputValue
    localStorage.setItem('querySearchDone', JSON.stringify(true))
    navigate(`/busca/${valueLocal}`)
  }

  return (
    <Container>
      <ContainerItems isOpen={changeLateral}>
        {changeLateral && (
          <Menu>
            <Li className="input-section">
              <Input onChange={handleChange} type="text"></Input>
              <ButtonSearch onClick={handleButtonClick}>Buscar</ButtonSearch>
            </Li>
            <Li isActive={pathname === '/'}>
              <HomeIcon sx={{ color: theme.colors.whiteFont, fontSize: 20 }} />
              <Link to="/">Home</Link>
            </Li>
            <Li isActive={pathname.includes === 'filmes'}>
              <TheatersIcon
                sx={{ color: theme.colors.whiteFont, fontSize: 20 }}
              />
              <Link to="/filmes">Filmes</Link>
            </Li>
            <Li isActive={pathname.includes === 'series'}>
              <LiveTvIcon
                sx={{ color: theme.colors.whiteFont, fontSize: 20 }}
              />
              <Link to="/series">Series</Link>
            </Li>
            <Li isActive={pathname.includes === 'series'}>
              <ListAltIcon
                sx={{ color: theme.colors.whiteFont, fontSize: 20 }}
              />
              <Link to="/series">Categorias</Link>
            </Li>
            <Li isActive={pathname.includes === 'series'}>
              <SettingsIcon
                sx={{ color: theme.colors.whiteFont, fontSize: 20 }}
              />
              <Link to="/series">Configurações</Link>
            </Li>
          </Menu>
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

export default LateralMenu

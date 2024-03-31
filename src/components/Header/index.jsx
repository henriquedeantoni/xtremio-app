import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import HomeIcon from '@mui/icons-material/Home'

import Logo from '../../assets/complete-logo.jpg'
import { theme } from '../../utils/themes'
import {
  Container,
  Menu,
  Li,
  UserInfo,
  UserGreetings,
  PassInput,
} from './styles'

function Header() {
  const [changeBackground, setChangeBackground] = useState(false)
  const { pathname } = useLocation()

  window.onscroll = () => {
    if (!changeBackground && window.pageYOffset > 150) {
      setChangeBackground(true)
    }
    if (changeBackground && window.pageXOffset <= 150) {
      setChangeBackground(false)
    }
  }

  const setPage = () => {
    localStorage.setItem('localPage', 1)
  }

  return (
    <Container changeBackground={changeBackground}>
      <img src={Logo} alt="logo-dev" />
      <Menu>
        <Li isActive={pathname === '/'}>
          <HomeIcon sx={{ color: theme.colors.whiteFont, fontSize: 20 }} />
          <Link to="/" onClick={() => setPage()}>
            Home
          </Link>
        </Li>
        <UserInfo>
          <UserGreetings>Olá Henrique</UserGreetings>
          <PassInput type={'text'} placeholder={'********'}></PassInput>
        </UserInfo>
      </Menu>
    </Container>
  )
}

export default Header

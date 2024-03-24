import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Logo from '../../assets/complete-logo.jpg'
import { Container, Menu, Li } from './styles'

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

  return (
    <Container changeBackground={changeBackground}>
      <img src={Logo} alt="logo-dev" />
      <Menu>
        <Li isActive={pathname === '/'}>
          <Link to="/">Início</Link>
        </Li>
      </Menu>
    </Container>
  )
}

export default Header

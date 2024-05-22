import React from 'react'
// import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'

import Logo from '../../assets/complete-logo.jpg'
import LoginImg from '../../assets/posters-people.jpg'
import Button from '../../components/Button'
import {
  Container,
  ContainerContent,
  P,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  SignInLink,
} from './styles'

function Login() {
  const navigate = useNavigate()
  // const { putUserData } = useUser()

  const handleSubmit = () => {
    console.log('ok')
  }

  return (
    <Container>
      <ContainerContent>
        <LoginImage src={LoginImg} alt="login-image" />
        <ContainerItens>
          <img
            src={Logo}
            alt="logo-code-burger"
            style={{ height: '160px', width: '160px' }}
          />
          <h2>Filmes, vídeos, séries e muito mais!</h2>
          <P>Login</P>
          <form noValidate onSubmit={handleSubmit()}>
            <Label>Email</Label>
            <Input type="email" />

            <Label>Senha</Label>
            <Input type="password" />

            <Button type="submit" style={{ marginTop: 75, marginBottom: 25 }}>
              Sign In
            </Button>
          </form>

          <SignInLink>
            Não possui conta?{' '}
            <Link
              style={{ color: 'white' }}
              to="https://developer.themoviedb.org/"
            >
              Sign Up
            </Link>
          </SignInLink>
        </ContainerItens>
      </ContainerContent>
    </Container>
  )
}

export default Login

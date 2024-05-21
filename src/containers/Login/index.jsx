import React from 'react'
// import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'

import Logo from '../../assets/complete-logo.jpg'
import LoginImg from '../../assets/logo.jpg'
import Button from '../../components/Button'
import {
  Container,
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
      <LoginImage src={LoginImg} alt="login-image" />
      <ContainerItens>
        <img src={Logo} alt="logo-code-burger" />
        <h1>Login</h1>

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
          <Link style={{ color: 'white' }} to="/">
            Sign Up
          </Link>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}

export default Login

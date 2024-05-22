import styled from 'styled-components'

import Background from '../../assets/background2.jpg'
import { theme } from '../../utils/themes'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${theme.colors.backContainer};
  border-radius: 30px;
  border: ${theme.colors.purpleVibrant} solid 2px;
  img {
    margin: 0 auto;
  }
  h2 {
    font-style: normal;
    color: ${theme.colors.purpleVibrant};
    font-weight: 500;
    font-size: 17px;
    line-height: 21px;
    text-align: center;
    margin-top: 25px;
  }
`

export const P = styled.p`
  font-style: normal;
  color: ${theme.colors.purpleVibrant};
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: left;
  margin-top: 25px;
`

export const LoginImage = styled.img`
  height: 70%;
  padding: 20px;
  border-radius: 40px;
`

export const ContainerItens = styled.div`
  border-radius: 0 10px 10px 0;
  height: 70%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    text-align: center;
    margin-top: 100px;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  margin-top: 28px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 391.5px;
  height: 38px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 225, 0.19);
  border-radius: 5px;
  border: ${(props) => (props.error ? '2px solid #CC1717' : 'none')};
  padding-left: 10px;
`

export const SignInLink = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const ErrorMessage = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  margin-top: 2px;

  color: #cc1717;
`

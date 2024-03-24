import styled, { keyframes } from 'styled-components'

const scale = keyframes`
    from{
        transform: scale(0)
    }
    to{
        transform: scale(1)
    }
`
export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const Background = styled.div`
  background-image: url(${(props) => props.image});
  height: 50vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 1500px;
  margin-top: -100px;
`

export const Cover = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  height: 100%;
  z-index: 99;

  img {
    width: 360px;
    border-radius: 40px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.5s linear;
    margin-bottom: 300px;
  }
`

export const Info = styled.div`
  padding: 20px;
  width: 50%;
  z-index: 99;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  h2 {
    font-size: 44px;
    font-weight: 700;
    color: #ffffff;
  }

  h3 {
    font-weight: 700;
    color: #efefef;
    margin-top: 32px;
    margin-bottom: 5px;
    font-size: 25px;
  }

  p {
    font-weight: 600;
    color: #fafafa;
    margin-top: 5px;
    margin-bottom: 30px;
    font-size: 20px;
  }
`
export const ContainerCredits = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
`

export const ContainerMovies = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    width: 100%;
    height: 100%;
    margin: 20px 0;
  }

  h4 {
    color: #ffffff;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 12px;
  }

  iframe {
    border: none;
  }
`

export const Message = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #fafafa;
`

export const TextDescription = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #fafafa;
`

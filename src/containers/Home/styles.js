import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
`

export const ScreenMovies = styled.div`
  display: grid;
`

export const Background = styled.div`
  background-image: url(${(props) => props.$img});
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 60px;
  align-items: center;
  height: 100%;
  max-width: 1500px;
`

export const Info = styled.div`
  z-index: 2;
  padding: 20px;
  width: 50%;

  h1 {
    font-size: 45px;
    font-weight: 700;
    color: #ffffff;
  }

  p {
    width: 400px;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    margin-top: 30px;
    margin-bottom: 20px;
  }
`

export const Poster = styled.div`
  z-index: 3;
  img {
    width: 300px;
    border-radius: 16px;
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  gap: 25px;
`

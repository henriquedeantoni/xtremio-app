import styled from 'styled-components'

export const Container = styled.div`
  background-color: #000000;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid: column;
`

export const Header = styled.div`
  background-color: #000000;
  display: grid;
  align-items: center;
  justify-content: left;
  margin-top: 100px;

  h2 {
    color: #fafafa;
    font-size: 18px;
    font-weight: 600;
    margin: 20px 0 5px 50px;
  }
`

export const InputDiv = styled.div`
  display: flex;
`

export const Input = styled.input`
  background-color: #3d3d3d;
  height: 26px;
  width: 260px;
  border: 1px solid #303030;
  border-radius: 5px;
  padding-left: 5px;
  margin: 20px 20px 10px 45px;
`

export const ResultContainer = styled.div`
  display: grid;
  background-color: #3d3d3d;
  height: 100%;
  width: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1px;
  height: 225px;

  img {
    border-radius: 12px;
  }
  div {
    display: grid;
  }

  h3 {
    color: #ffffff;
    font-size: 12px;
    margin-top: 6;
  }
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  margin-top: 5px;
  color: #ffffff;
  font-size: 8px;
  font-weight: 400;
  cursor: pointer;
`

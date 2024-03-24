import styled from 'styled-components'

export const Title = styled.h3`
  color: #f3f3f3;
  font-size: 28px;
  font-weight: 600;
`

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 10px;

  div {
    display: flex;
    flex-direction: column;
  }

  p {
    color: #fafafa;
  }

  img {
    height: 200px;
    border-radius: 5px;
  }
`

import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 150;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Background = styled.div`
  background: #000;
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 50px;
  max-width: 1000px;

  iframe {
    border: none;
  }
`

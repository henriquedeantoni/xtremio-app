import styled from 'styled-components'

import { theme } from '../../utils/themes'

export const Container = styled.div`
  height: 100%;
  background-color: ${theme.colors.backColor};
  padding: 0;
  display: flex;
  position: fixed;
  z-index: 150;
`

export const ContainerItems = styled.div`
  height: 100%;
  background-color: ${theme.colors.backColor};
  width: ${(props) => (props.isOpen ? '12vw' : '0')};
  transition: 0.05s;
  //position: fixed;
`

export const Menu = styled.ol`
  padding: 25px 10px;
  list-style: none;
  margin: 75px 0;
  display: grid;
  background-color: ${theme.colors.backColor};

  .input-section {
    display: flex;
    z-index: 160;
  }
`

export const Li = styled.li`
  margin: 10px 0;
  cursor: pointer;
  font-weight: 600;
  width: 12vw;
  a {
    margin-left: 15px;
    margin-bottom: 250px;
    text-decoration: none;
    color: #ffffff;
    vertical-align: center;
    font-size: 15px;
    cursor: pointer;
  }
`

export const Input = styled.input`
  width: 125px;
  height: 36px;
  margin-right: 5px;
  border-radius: 6px;
  border: 1px solid #0a0a0a;
  padding-left: 4px;
`

export const Button = styled.button`
  height: 25px;
  width: 50px;
  font-size: 20px;
  font-weight: 600;
`

export const DivButton = styled.div`
  width: 45px;
  height: 100%;
  background-color: ${theme.colors.backColor};
  display: flex;
  align-items: center;
  padding: 6px;
  border-right: 2px solid #aaaaaa;
`

export const ArrowBackIcon = styled.button`
  padding: 0;
`
export const ArrowImage = styled.img`
  height: 36px;
  mix-blend-mode: multiply;
  transform: ${(props) => (props.direction ? 'rotate(0)' : 'rotate(-0.5turn)')};
  transition: 0.1s;
`

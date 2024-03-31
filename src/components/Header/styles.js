import styled from 'styled-components'

import { theme } from '../../utils/themes'

export const Container = styled.div`
  min-height: 70px;
  z-index: 200;
  position: fixed;
  background-color: ${theme.colors.backColor};
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  width: 100%;
  img {
    width: 70px;
  }
  border-bottom: 2px ${theme.colors.purpleDark} solid;
`

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 60px;
  width: 500px;
  align-items: center;
`

export const Li = styled.li`
  font-weight: 600;
  cursor: pointer;
  font-size: 20px;
  position: relative;
  align-items: center;
  display: flex;
  width: 90px;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: #ffffff;
  }

  &::after {
    content: '';
    height: 3px;
    width: ${(props) => (props.isActive ? '100%' : 0)};
    background-color: #189b20;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`
export const UserInfo = styled.div`
  background-color: transparent;
  display: flex;
  gap: 25px;
  justify-content: space-between;
  width: 320px;
  align-items: center;
`

export const UserGreetings = styled.p`
  font-size: 20px;
  color: #ffffff;
  width: 150px;
`

export const PassInput = styled.input`
  background-color: ${theme.colors.backGround};
  width: 100px;
  height: 30px;
  line-height: 15px;
  border-radius: 8px;
  border: solid 1.5px ${theme.colors.purpleDark};
  padding: 2.5px 8px;
  font-size: 15px;
  color: ${theme.colors.whiteFont};
  text-align: middle;
`

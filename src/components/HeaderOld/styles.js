import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100px;
  z-index: 99;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 60px;
  width: 100%;
  background-color: ${(props) =>
    props.changeBackground ? '#000' : 'transparent'};
  transition: background-color 1s ease-in-out;
  img {
    width: 100px;
  }
`

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 60px;
`

export const Li = styled.li`
  font-weight: 600;
  cursor: pointer;
  font-size: 30px;
  position: relative;

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

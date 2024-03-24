import styled, { css } from 'styled-components'

const buttonStyles = css`
  border: 2px solid #ffffff;
  background: transparent;
  color: #ffffff;
  border-radius: 5px;
  padding: 5px 6px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;

  &:hover {
    color: #ff0000;
    background: #ffffff;
  }
`

export const Button = styled.button`
  ${buttonStyles}
`

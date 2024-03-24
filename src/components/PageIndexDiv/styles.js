import styled from 'styled-components'

import { theme } from '../../utils/themes'

export const Container = styled.div`
  background-color: ${theme.colors.backGround};
  display: flex;
  justify-content: space-between;
  align-content: center;
  border: none;
  margin: 12px auto;
  width: 800px;
  height: 55px;
`
export const Number = styled.button`
  background-color: transparent;
  color: #fafafa;
  font-size: 16px;
  font-weight: 700;
  height: 32px;
  margin: 10px;
  cursor: pointer;
  padding: 5px;
  border: 2px solid
    ${(props) => (props.pageIndex === props.value ? '#ffffff' : 'transparent')};
  border-radius: ${(props) =>
    props.pageIndex === props.value ? '8px' : 'none'};
`

export const PageIndex = styled.div`
  cursor: pointer;
`

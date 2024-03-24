import styled from 'styled-components'

import { theme } from '../../utils/themes'

export const Container = styled.div`
  padding-top: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.backGround};
`

export const ContainerResults = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  height: 93%;
  weight: 100%;
  color: white;
`

import { createGlobalStyle } from 'styled-components'

import { theme } from '../utils/themes'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
    }

    body{
        background: ${theme.colors.backGround};;
    }
`

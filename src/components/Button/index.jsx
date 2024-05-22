import { useState } from 'react'

import { ButtonRed, ButtonWhite } from './styles'

function Button({ children, isRed, ...rest }) {
  const [shadowIntensity, setShadowIntensity] = useState(0)

  /* setInterval(() => {
    setTimeout(() => {
      setShadowIntensity(20)
    }, 3000)
    setTimeout(() => {
      setShadowIntensity(0)
    }, 3000)
  }, 6000) */

  // console.log(shadowIntensity)
  return (
    <>
      {isRed ? (
        <ButtonRed intensity={shadowIntensity} {...rest}>
          {children}
        </ButtonRed>
      ) : (
        <ButtonWhite intensity={shadowIntensity} {...rest}>
          {children}
        </ButtonWhite>
      )}
    </>
  )
}

export default Button

import { Button } from './styles'

function ButtonSearch({ children, ...rest }) {
  return (
    <>
      <Button {...rest}>{children}</Button>
    </>
  )
}

export default ButtonSearch

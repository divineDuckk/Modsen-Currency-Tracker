import { FC } from 'react'

import { NavContainer, NavElement } from './styled'

export const NavBar: FC = () => {
  return (
    <NavContainer>
      <NavElement>Home</NavElement>
      <NavElement>Timeline</NavElement>
      <NavElement>Bank card</NavElement>
      <NavElement>Contato</NavElement>
    </NavContainer>
  )
}

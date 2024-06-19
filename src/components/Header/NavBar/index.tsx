import { FC } from 'react'
import { Link } from 'react-router-dom'

import { NavContainer, NavElement } from './styled'

export const NavBar: FC = () => {
  return (
    <NavContainer>
      <NavElement>
        <Link to="/">Home</Link>
      </NavElement>
      <NavElement>
        <Link to="/timeline">Timeline</Link>
      </NavElement>
      <NavElement>
        <Link to="/bank_card">Bank card</Link>
      </NavElement>
      <NavElement>
        <Link to="/contato">Contato</Link>
      </NavElement>
    </NavContainer>
  )
}

import { FC } from 'react'
import { Link } from 'react-router-dom'

import { LINKS } from './constants'
import { NavContainer, NavElement } from './styled'

export const NavBar: FC = () => {
  return (
    <NavContainer>
      {LINKS.map(({ content, path }) => (
        <NavElement key={content}>
          <Link to={path}>{content}</Link>
        </NavElement>
      ))}
    </NavContainer>
  )
}

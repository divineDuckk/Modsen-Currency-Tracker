import { FC } from 'react'
import { Link } from 'react-router-dom'

import { LinksBlock, LinksCategory } from './styled'
import { LinksProps } from './types'

export const LinksSection: FC<LinksProps> = ({ category, linksNames }) => {
  return (
    <LinksBlock>
      <LinksCategory>{category}</LinksCategory>
      {linksNames.map((el) => (
        <Link key={el} to={el}>
          {el}
        </Link>
      ))}
    </LinksBlock>
  )
}

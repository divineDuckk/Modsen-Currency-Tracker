import { PropsWithChildren } from 'react'

import { CardsContainer } from './styled'

export const CardsGroup = ({ children }: PropsWithChildren) => {
  return <CardsContainer>{children}</CardsContainer>
}

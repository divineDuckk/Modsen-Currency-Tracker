import { FC } from 'react'

import { FallbackContainer, FallbackMessage } from './styled'

export const FallBack: FC = () => (
  <FallbackContainer>
    <FallbackMessage>Oops... Something went wrong.</FallbackMessage>
  </FallbackContainer>
)

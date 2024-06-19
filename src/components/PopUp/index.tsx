import {
  CloseButton,
  MainContainer,
  PopUpContainer,
  PopUpWrapper,
  Title,
  TopPanel,
} from './styled'
import { FC, useEffect } from 'react'
import { createPortal } from 'react-dom'

import { PopUpProps } from './types'

export const PopUp: FC<PopUpProps> = ({ children, onClose, title }) => {
  const handleContainerClick = (event: React.MouseEvent) => {
    event.stopPropagation()
  }
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])
  return createPortal(
    <PopUpWrapper onClick={onClose}>
      <PopUpContainer onClick={handleContainerClick}>
        <TopPanel>
          <Title>{title}</Title>
          <CloseButton onClick={onClose}></CloseButton>
        </TopPanel>
        <MainContainer>{children}</MainContainer>
      </PopUpContainer>
    </PopUpWrapper>,
    document.getElementById('pop-up')!
  )
}

import {
  CloseButton,
  MainContainer,
  PopUpContainer,
  PopUpWrapper,
  Title,
  TopPanel,
} from './styled'
import { FC } from 'react'
import { createPortal } from 'react-dom'

import { useLockScroll } from '@/hooks'

import { PopUpProps } from './types'

export const PopUp: FC<PopUpProps> = ({ children, handleClose, title }) => {
  const handleContainerClick = (event: React.MouseEvent) => {
    event.stopPropagation()
  }
  useLockScroll()
  return createPortal(
    <PopUpWrapper onClick={handleClose}>
      <PopUpContainer onClick={handleContainerClick}>
        <TopPanel>
          <Title>{title}</Title>
          <CloseButton onClick={handleClose}></CloseButton>
        </TopPanel>
        <MainContainer>{children}</MainContainer>
      </PopUpContainer>
    </PopUpWrapper>,
    document.getElementById('pop-up')!
  )
}

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

export const PopUp: FC<PopUpProps> = ({ children, onClose, title }) => {
  const handleContainerClick = (event: React.MouseEvent) => {
    event.stopPropagation()
  }
  useLockScroll()
  return createPortal(
    <PopUpWrapper onClick={onClose} data-testid="popup_wrapper">
      <PopUpContainer onClick={handleContainerClick} data-testid="popup">
        <TopPanel>
          <Title>{title}</Title>
          <CloseButton
            onClick={onClose}
            data-testid="popup_close_button"
          ></CloseButton>
        </TopPanel>
        <MainContainer>{children}</MainContainer>
      </PopUpContainer>
    </PopUpWrapper>,
    document.body
  )
}

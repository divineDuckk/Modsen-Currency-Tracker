import styled, { keyframes } from 'styled-components'

import { NotificationContainerProps } from './types'

const BORDER_RADIUS = 5
const ANIMATION_TIME = 0.5
const NOTIFICATION_CONTAINER_PADDING = '1%'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
`

export const NotificationContainer = styled.div<NotificationContainerProps>`
  position: fixed;
  top: ${({ theme }) => theme.tops[2]};
  right: ${({ theme }) => theme.rights[0]};
  transform: translateY(-50%);
  background-color: ${({ theme }) => theme.colors.notificationBackground};
  padding: ${NOTIFICATION_CONTAINER_PADDING};
  border-radius: ${BORDER_RADIUS}px;
  animation: ${({ $isFadeOut }) => ($isFadeOut ? fadeOut : fadeIn)}
    ${ANIMATION_TIME}s forwards;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
`

export const NotificationMessage = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  cursor: default;
`

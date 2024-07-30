import styled, { css, keyframes } from 'styled-components'

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`

const POINT_SIZE = 33
const SMALL_POINT_SIZE = 16

export const LastTime = styled.p``
export const TimeBlock = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => css`
    gap: ${theme.gaps[1]}px;
    font-size: ${theme.fontSizes[10]}px;
    font-weight: ${theme.fontWeights[0]};
    line-height: ${theme.lineHeights[5]}px;
    margin-bottom: ${theme.margins[8]}px;
  `}
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    font-size: ${({ theme }) => theme.fontSizes[11]}px;
  }
`
export const Point = styled.span`
  width: ${POINT_SIZE}px;
  height: ${POINT_SIZE}px;
  background-color: ${({ theme }) => theme.colors['circleOut']};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${pulseAnimation} 1s ease-in-out infinite;
`
export const SmallPoint = styled.span`
  width: ${SMALL_POINT_SIZE}px;
  height: ${SMALL_POINT_SIZE}px;
  background-color: ${({ theme }) => theme.colors['circleIn']};
  border-radius: 50%;
  animation: ${pulseAnimation} 1s ease-in-out infinite;
`

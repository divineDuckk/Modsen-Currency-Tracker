import styled, { css } from 'styled-components'

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
`
export const Point = styled.span`
  width: ${POINT_SIZE}px;
  height: ${POINT_SIZE}px;
  background-color: ${({ theme }) => theme.colors['circleOut']};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const SmallPoint = styled.span`
  width: ${SMALL_POINT_SIZE}px;
  height: ${SMALL_POINT_SIZE}px;
  background-color: ${({ theme }) => theme.colors['circleIn']};
  border-radius: 50%;
`

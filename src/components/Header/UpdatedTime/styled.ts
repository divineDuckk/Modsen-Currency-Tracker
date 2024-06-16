import styled from 'styled-components'

const POINT_SIZE = 33
const SMALL_POINT_SIZE = 16
const OUT_COLOR = '#02461f'
const IN_COLOR = '#00BC4F'

export const LastTime = styled.p``
export const TimeBlock = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gaps[1]}px;
  font-size: ${({ theme }) => theme.fontSizes[10]}px;
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  line-height: ${({ theme }) => theme.lineHeights[5]}px;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.margins[8]}px;
`
export const Point = styled.span`
  width: ${POINT_SIZE}px;
  height: ${POINT_SIZE}px;
  background-color: ${OUT_COLOR};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const SmallPoint = styled.span`
  width: ${SMALL_POINT_SIZE}px;
  height: ${SMALL_POINT_SIZE}px;
  background-color: ${IN_COLOR};
  border-radius: 50%;
`

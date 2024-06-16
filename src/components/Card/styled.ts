import styled from 'styled-components'

const CARD_WIDTH = 520
const IMAGE_SIZES = 80
const IMAGE_RADIUS = 8
const CARD_RADIUS = 8

export const CardContainer = styled.button`
  width: ${CARD_WIDTH}px;
  cursor: pointer;
  padding-left: ${({ theme }) => theme.paddings[2]}px;
  padding-top: ${({ theme }) => theme.paddings[2]}px;
  padding-bottom: ${({ theme }) => theme.paddings[2]}px;
  gap: ${({ theme }) => theme.gaps[1]}px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['cardBg']};
  margin-bottom: ${({ theme }) => theme.margins[7]}px;
  border-radius: ${CARD_RADIUS}px;
  border: 1px solid ${({ theme }) => theme.colors['cardBorder']};
`
export const CashImage = styled.img`
  width: ${IMAGE_SIZES}px;
  height: ${IMAGE_SIZES}px;
  border-radius: ${IMAGE_RADIUS}px;
`
export const TextInfo = styled.div`
  text-align: left;
  font-family: 'Poppins';
`
export const CashName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[11]}px;
  font-weight: ${({ theme }) => theme.fontWeights[1]};
  line-height: ${({ theme }) => theme.lineHeights[9]}px;
  color: ${({ theme }) => theme.colors['gray']};
`
export const Value = styled.span`
  color: ${({ theme }) => theme.colors['cashGray']};
  font-size: ${({ theme }) => theme.fontSizes[9]}px;
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  line-height: ${({ theme }) => theme.lineHeights[5]}px;
`

import { styled, css } from 'styled-components'

import { CardContainerAttrs } from './types'

const CARD_WIDTH = 520
const CARD_WIDTH_MOBILE = 720
const IMAGE_SIZES = 80
const IMAGE_RADIUS = 8
const CARD_RADIUS = 8

export const CardContainer = styled.button<CardContainerAttrs>`
  width: ${CARD_WIDTH}px;
  display: flex;
  align-items: center;
  border-radius: ${CARD_RADIUS}px;
  ${({ theme, $isStock }) => css`
    cursor: ${$isStock ? 'default' : 'pointer'};
    padding-left: ${theme.paddings[2]}px;
    padding-top: ${theme.paddings[2]}px;
    padding-bottom: ${theme.paddings[2]}px;
    gap: ${theme.gaps[2]}px;
    margin-bottom: ${theme.margins[8]}px;
    background-color: ${theme.colors['cardBg']};
    border: 1px solid ${theme.colors['cardBorder']};
  `}
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    width: ${CARD_WIDTH_MOBILE}px;
  }
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
  ${({ theme }) => css`
    font-size: ${theme.fontSizes[11]}px;
    font-weight: ${theme.fontWeights[1]};
    line-height: ${theme.lineHeights[9]}px;
    color: ${theme.colors['gray']};
  `}
`
export const Value = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes[9]}px;
    font-weight: ${theme.fontWeights[0]};
    line-height: ${theme.lineHeights[5]}px;
    color: ${theme.colors['cashGray']};
  `}
`

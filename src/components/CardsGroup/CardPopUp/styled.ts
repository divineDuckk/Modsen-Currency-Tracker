import styled from 'styled-components'

import { CurrencyButtonAttrs } from './types'

const TRANSITION_CURRENCY = 0.3
const CURRENCY_BUTTON_WIDTH = 150
const CURRENCY_BUTTON_HEIGHT = 25
const CURRENCY_BUTTON_WIDTH_MOBILE = 250
const CURRENCY_BUTTON_HEIGHT_MOBILE = 37
const CURRENCY_BUTTON_BEFORE_SIZES = 8
const CURRENCY_BUTTON_BEFORE_TOP = 3
const CURRENCY_BUTTON_BEFORE_TOP_MOBILE = 10
const CURRENCY_BUTTON_BEFORE_LEFT = -15
const BORDER_RADIUS = 5

export const CardPopUpContainer = styled.div`
  display: flex;
`
export const CurrenciesPopUpCardBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps[0]}px;
  width: 50%;
`
export const CurrenciesChangeBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps[0]}px;
`

export const CurrencyButton = styled.button<CurrencyButtonAttrs>`
  position: relative;
  cursor: pointer;
  height: ${CURRENCY_BUTTON_HEIGHT}px;
  width: ${CURRENCY_BUTTON_WIDTH}px;
  font-family: 'Poppins';
  transition: ${TRANSITION_CURRENCY}s;
  color: ${({ theme }) => theme.textColor};
  border: 1px solid ${({ theme }) => theme.colors['borders']};
  background-color: transparent;
  border-radius: ${BORDER_RADIUS}px;
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    font-size: ${({ theme }) => theme.fontSizes[4]}px;
    height: ${CURRENCY_BUTTON_HEIGHT_MOBILE}px;
    width: ${CURRENCY_BUTTON_WIDTH_MOBILE}px;
  }
  ${({ $isChoosen, theme }) =>
    $isChoosen &&
    `&::before {
      content: '';
      position:absolute;
      left:${CURRENCY_BUTTON_BEFORE_LEFT}px;
      top:${CURRENCY_BUTTON_BEFORE_TOP}px;
      border-top: ${CURRENCY_BUTTON_BEFORE_SIZES}px solid transparent;
      border-bottom:  ${CURRENCY_BUTTON_BEFORE_SIZES}px solid transparent;
      border-left:  ${CURRENCY_BUTTON_BEFORE_SIZES}px solid ${theme.colors['borders']};
      @media (max-width: ${theme.breakPoints[0]}px) {
        top:${CURRENCY_BUTTON_BEFORE_TOP_MOBILE}px;
      }
  `};
`
export const AmountOfMoney = styled.input`
  height: ${CURRENCY_BUTTON_HEIGHT}px;
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    font-size: ${({ theme }) => theme.fontSizes[4]}px;
  }
`

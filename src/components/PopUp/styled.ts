import styled from 'styled-components'

const POPUP_WRAPPER_SIZES = '100%'
const POPUP_WIDTH = '40%'
const POPUP_HEIGHT = '55%'
const POPUP_RADIUS = 10
const CLOSE_BTN_SIZE = 50
const CLOSE_BTN_THICKNESS = 2
const CLOSE_BTN_INCREASES = 20
const CLOSE_BTN_TRANSLATE = 50
const CLOSE_BTN_ROTATE = 45

export const PopUpContainer = styled.div`
  width: ${POPUP_WIDTH};
  height: ${POPUP_HEIGHT};
  background-color: ${({ theme }) => theme.colors['popUpBg']};
  border-radius: ${POPUP_RADIUS}px;
`
export const TopPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors['borders']};
  border-radius: ${POPUP_RADIUS}px;
`
export const Title = styled.h3`
  margin: 0 ${({ theme }) => theme.margins[0]}px;
`
export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: ${CLOSE_BTN_SIZE}px;
  height: ${CLOSE_BTN_SIZE}px;
  background-color: transparent;
  position: relative;
  border: none;
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: ${({ theme }) => theme.tops[1]};
    left: ${({ theme }) => theme.lefts[1]};
    width: ${CLOSE_BTN_THICKNESS}px;
    height: ${CLOSE_BTN_INCREASES}px;
    background-color: ${({ theme }) => theme.colors['buttons']};
    transform-origin: center center;
  }

  &::before {
    transform: translate(-${CLOSE_BTN_TRANSLATE}%, -${CLOSE_BTN_TRANSLATE}%)
      rotate(${CLOSE_BTN_ROTATE}deg);
  }

  &::after {
    transform: translate(-${CLOSE_BTN_TRANSLATE}%, -${CLOSE_BTN_TRANSLATE}%)
      rotate(-${CLOSE_BTN_ROTATE}deg);
  }
`
export const CloseImage = styled.img``
export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.paddings[0]}px;
`
export const PopUpWrapper = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.tops[0]};
  left: ${({ theme }) => theme.lefts[0]};
  width: ${POPUP_WRAPPER_SIZES};
  height: ${POPUP_WRAPPER_SIZES};
  z-index: ${({ theme }) => theme.zIndexes[0]};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['popupWrapperBg']};
`

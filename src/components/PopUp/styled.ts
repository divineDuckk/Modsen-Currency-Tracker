import styled from 'styled-components'

const POPUP_WIDTH = '40%'
const POPUP_HEIGHT = '55%'
const POPUP_RADIUS = 10
const CLOSE_BTN_SIZE = 50

export const PopUpContainer = styled.div`
  width: ${POPUP_WIDTH};
  height: ${POPUP_HEIGHT};
  background-color: ${({ theme }) => theme.colors['popupBg']};
  border-radius: ${POPUP_RADIUS}px;
`
export const TopPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid white;
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
  border: 0;
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 30px;
    background-color: white;
    transform-origin: center center;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['popupWrapperBg']};
`

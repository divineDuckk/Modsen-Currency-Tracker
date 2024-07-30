import styled, { keyframes } from 'styled-components'

const BORDER_RADIUS = '50%'
const BORDER_SIZE = 8

const LOADER_WIDTH = 60
const LOADER_HEIGHT = 60

const LOADER_TRANSITION = 0.9

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  border: ${BORDER_SIZE}px solid ${({ theme }) => theme.colors.loaderBg};
  border-top: ${BORDER_SIZE}px solid ${({ theme }) => theme.colors.loader};
  border-radius: ${BORDER_RADIUS};
  width: ${LOADER_WIDTH}px;
  height: ${LOADER_HEIGHT}px;
  animation: ${spin} ${LOADER_TRANSITION}s linear infinite;
`
export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

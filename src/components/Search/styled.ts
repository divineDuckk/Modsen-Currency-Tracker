import styled from 'styled-components'

const SEARCH_ICON_SIZES = 18
const SEARCH_ICON_BORDER = 1
const SEARCH_ICON_BORDER_RADIUS = '50%'

const STICK_WIDTH = 5
const STICK_HEIGHT = 1
const STICK_PADDINGS = 14

const CONTAINER_HEIGHT = 65
const CONTAINER_WIDTH = 450
const CONTAINER_RADIUS = 10

export const SearchContainer = styled.div`
  width: ${CONTAINER_WIDTH}px;
  position: relative;
  margin-bottom: ${({ theme }) => theme.margins[9]}px;
`

export const SearchInput = styled.input`
  font-family: 'Poppins';
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  height: 100%;
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.textColor};
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    font-size: ${({ theme }) => theme.fontSizes[8]}px;
  }
  &:active,
  &:focus {
    border: 0;
    outline: none;
  }
`
export const SearchTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes[11]}px;
  font-weight: ${({ theme }) => theme.fontWeights[1]};
  line-height: ${({ theme }) => theme.lineHeights[9]}px;
  margin-bottom: ${({ theme }) => theme.margins[2]}px;
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    font-size: ${({ theme }) => theme.fontSizes[12]}px;
  }
`
export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  height: ${CONTAINER_HEIGHT}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.searchInputBg};
  padding: 0 ${({ theme }) => theme.paddings[0]}px;
  border-radius: ${CONTAINER_RADIUS}px;
`

export const SearchIcon = styled.div`
  width: ${SEARCH_ICON_SIZES}px;
  height: ${SEARCH_ICON_SIZES}px;
  border: ${SEARCH_ICON_BORDER}px solid ${({ theme }) => theme.colors.borders};
  border-radius: ${SEARCH_ICON_BORDER_RADIUS};
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: ${STICK_WIDTH}px;
    height: ${STICK_HEIGHT}px;
    background: ${({ theme }) => theme.colors.borders};
    top: ${STICK_PADDINGS}px;
    left: ${STICK_PADDINGS}px;
    transform: rotate(45deg);
    transform-origin: 0 0;
  }
`
export const Hint = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: ${CONTAINER_RADIUS}px;
  z-index: ${({ theme }) => theme.zIndexes[0]};
  background-color: ${({ theme }) => theme.colors.searchInputBg};
  width: ${CONTAINER_WIDTH}px;
`
export const HintElem = styled.li`
  padding-left: ${({ theme }) => theme.paddings[0]}px;
  cursor: pointer;
  &:hover {
    background-color: rebeccapurple;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    font-size: ${({ theme }) => theme.fontSizes[8]}px;
  }
`

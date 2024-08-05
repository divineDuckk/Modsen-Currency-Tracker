import styled from 'styled-components'

const BUTTON_HEIGHT = 45
const BUTTON_WIDTH = 150

const BUTTON_HEIGHT_MOBILE = 75
const BUTTON_WIDTH_MOBILE = 220

const INPUT_WIDTH = 150
const INPUT_HEIGHT = 45

const INPUT_HEIGHT_MOBILE = 75
const INPUT_WIDTH_MOBILE = 220

const MAX_BLOCK_WIDTH = INPUT_WIDTH * 3
const MAX_BLOCK_WIDTH_MOBILE = INPUT_WIDTH_MOBILE * 3
const INPUT_PADDING = 20

export const AddDataButton = styled.button`
  width: ${BUTTON_WIDTH}px;
  height: ${BUTTON_HEIGHT}px;
  padding: 0 ${({ theme }) => theme.paddings[0]}px;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  border: 1px solid black;
  font-family: 'Poppins';
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    width: ${BUTTON_WIDTH_MOBILE}px;
    height: ${BUTTON_HEIGHT_MOBILE}px;
    font-size: ${({ theme }) => theme.fontSizes[5]}px;
  }
`
export const ManageBlockWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-family: 'Poppins';
  max-width: ${MAX_BLOCK_WIDTH}px;
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    max-width: ${MAX_BLOCK_WIDTH_MOBILE}px;
  }
`
export const ManageButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
export const ClearDataButton = styled(AddDataButton)``
export const RandomButton = styled(AddDataButton)``
export const InformationInput = styled.input`
  font-family: 'Arial';
  width: ${INPUT_WIDTH}px;
  height: ${INPUT_HEIGHT}px;
  border: 0;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.buttonsBg};
  border: 1px solid black;
  &:active,
  &:focus {
    outline: none;
  }
  padding-left: ${INPUT_PADDING}px;
  padding-right: ${INPUT_PADDING}px;
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    width: ${INPUT_WIDTH_MOBILE}px;
    height: ${INPUT_HEIGHT_MOBILE}px;
    font-size: ${({ theme }) => theme.fontSizes[5]}px;
  }
`

export const Selector = styled.select`
  font-family: 'Poppins';
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  width: ${INPUT_WIDTH}px;
  height: ${INPUT_HEIGHT}px;
  border: 0;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.buttonsBg};
  border: 1px solid black;
  &:active,
  &:focus {
    outline: none;
  }
  padding-left: 1%;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    width: ${INPUT_WIDTH_MOBILE}px;
    height: ${INPUT_HEIGHT_MOBILE}px;
    font-size: ${({ theme }) => theme.fontSizes[5]}px;
  }
`
export const SelectorOption = styled.option`
  cursor: pointer;
`

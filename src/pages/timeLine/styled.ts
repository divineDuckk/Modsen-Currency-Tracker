import styled from 'styled-components'

const BUTTON_HEIGHT = 45
const BUTTON_WIDTH = 150

const INPUT_WIDTH = 150
const INPUT_HEIGHT = 45
export const TimeLineContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps[1]}px;
  justify-content: center;
  align-items: center;
`
export const AddDataButton = styled.button`
  width: ${BUTTON_WIDTH}px;
  height: ${BUTTON_HEIGHT}px;
  padding: 0 ${({ theme }) => theme.paddings[0]}px;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  border: 1px solid black;
`
export const ManageBlockWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
export const ManageButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
export const ClearDataButton = styled(AddDataButton)``
export const RandomButton = styled(AddDataButton)``
const Input = styled.input`
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
`
export const DateInput = styled(Input)``
export const Open = styled(Input)``
export const Close = styled(Input)``
export const Low = styled(Input)``
export const High = styled(Input)``

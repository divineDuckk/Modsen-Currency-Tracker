import styled from 'styled-components'

const FORM_MAX_WIDTH = '30%'
const FORM_MAX_WIDTH_MOBILE = '75%'
const INPUT_PADDING = '3%'
const BORDER_RADIUS = 8
const TEXTAREA_PADDING = '3%'
const SUBMIT_BUTTON_PADDING = '3%'
const SUBMIT_BUTTON_SCALE = 1.02
const SUBMIT_BUTTON_TRANSITION = 0.2

export const ContactWrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${FORM_MAX_WIDTH};
  margin-bottom: ${({ theme }) => theme.margins[9]}px;
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    max-width: ${FORM_MAX_WIDTH_MOBILE};
  }
`

export const FormInput = styled.input`
  margin-bottom: ${({ theme }) => theme.margins[0]}px;
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  padding: ${INPUT_PADDING};
  background-color: ${({ theme }) => theme.colors.contactBg};
  border: none;
  border-radius: ${BORDER_RADIUS}px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
  }
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    font-size: ${({ theme }) => theme.fontSizes[8]}px;
  }
`

export const FormTextArea = styled.textarea`
  font-family: 'Arial';
  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
  }
  border-radius: ${BORDER_RADIUS}px;

  margin-bottom: ${({ theme }) => theme.margins[0]}px;
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  padding: ${TEXTAREA_PADDING};
  resize: vertical;
  background-color: ${({ theme }) => theme.colors.contactBg};
  border: none;
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    font-size: ${({ theme }) => theme.fontSizes[8]}px;
  }
`

export const SubmitButton = styled.button`
  padding: ${SUBMIT_BUTTON_PADDING};
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  border: none;
  cursor: pointer;
  border-radius: ${BORDER_RADIUS}px;
  transition: ${SUBMIT_BUTTON_TRANSITION}s;
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    font-size: ${({ theme }) => theme.fontSizes[8]}px;
  }
  &:active {
    scale: ${SUBMIT_BUTTON_SCALE};
  }
`
export const ContactUsInfo = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[9]}px;
  margin-bottom: ${({ theme }) => theme.margins[1]}px;
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    font-size: ${({ theme }) => theme.fontSizes[13]}px;
  }
`

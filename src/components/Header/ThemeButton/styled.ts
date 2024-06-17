import styled from 'styled-components'

const TRANSLATE_VALUE = 27
const SLIDER_BEFORE_SIZE = 23
const SLIDER_RADIUS = 34
const TRANSTION = 0.4
const DARK_BODY = '#030304'
const SWTICH_WTDTH = 53
const SWTICH_HEITH = 25

export const Switch = styled.label`
  position: relative;
  width: ${SWTICH_WTDTH}px;
  height: ${SWTICH_HEITH}px;
`
export const CheckBox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background-color: ${({ theme }) => theme.body};
  }

  &:checked + span:before {
    transform: translateX(${TRANSLATE_VALUE}px);
  }
`
export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.body};
  border: 1px solid
    ${({ theme }) => (theme.body === DARK_BODY ? 'white' : DARK_BODY)};
  transition: ${TRANSTION}s;
  border-radius: ${SLIDER_RADIUS}px;

  &:before {
    content: '';
    height: ${SLIDER_BEFORE_SIZE}px;
    width: ${SLIDER_BEFORE_SIZE}px;
    border: 1px solid
      ${({ theme }) => (theme.body === DARK_BODY ? 'white' : DARK_BODY)};
    transition: ${TRANSTION}s;
    border-radius: 50%;
  }
`

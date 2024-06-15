import styled from 'styled-components'

const transalteValue = 22
const sliderBeforeSize = 26
const sliderBorderRadius = 34
const transition = 0.4

export const Switch = styled.label`
  position: relative;
  width: ${({ theme }) => theme.sizes[1]}px;
  height: ${({ theme }) => theme.sizes[0]}px;
`
export const CheckBox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background-color: ${({ theme }) => theme.body};
  }

  &:checked + span:before {
    transform: translateX(${transalteValue}px);
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
  border: 1px solid white;
  transition: ${transition}s;
  border-radius: ${sliderBorderRadius}px;

  &:before {
    content: '';
    height: ${sliderBeforeSize}px;
    width: ${sliderBeforeSize}px;
    border: 1px solid white;
    transition: ${transition}s;
    border-radius: 50%;
  }
`

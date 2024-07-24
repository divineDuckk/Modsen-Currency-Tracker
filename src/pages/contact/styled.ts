import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 30%;
  margin-bottom: ${({ theme }) => theme.margins[9]}px;
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
`

export const Input = styled.input`
  margin-bottom: ${({ theme }) => theme.margins[0]}px;
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  padding: 3%;
  background-color: ${({ theme }) => theme.colors.contactBg};
  border: none;
  border-radius: 1vw;
  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
  }
`

export const TextArea = styled.textarea`
  font-family: 'Arial';
  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
  }
  margin-bottom: ${({ theme }) => theme.margins[0]}px;
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  padding: 10px;
  resize: vertical;
  background-color: ${({ theme }) => theme.colors.contactBg};
  border: none;
  border-radius: 1vw;
  color: ${({ theme }) => theme.contactFormInputText};
`

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.contactFormButtonBackground};
  color: ${({ theme }) => theme.contactFormButtonText};
  border: none;
  cursor: pointer;
  border-radius: 1vw;

  &:hover {
    background-color: ${({ theme }) => theme.contactFormButtonBackgroundHover};
  }
`

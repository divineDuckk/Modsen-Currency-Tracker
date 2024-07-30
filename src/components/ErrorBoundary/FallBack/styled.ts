import styled from 'styled-components'

export const FallbackContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 20vh 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FallbackMessage = styled.h1`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: ${({ theme }) => theme.fontSizes[12]}px;
`

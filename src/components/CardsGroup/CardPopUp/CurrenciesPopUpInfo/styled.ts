import styled from 'styled-components'

export const CurrenciesPopUpInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    font-size: ${({ theme }) => theme.fontSizes[5]}px;
  }
`
export const FromToInfo = styled.p`
  text-align: left;
`
export const CurrencyValye = styled.p``

import styled from 'styled-components'

export const CardPopUpContainer = styled.div`
  display: flex;
`
export const MiniCurrenciesCardBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps[0]}px;
  width: 50%;
`

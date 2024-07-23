import styled from 'styled-components'

const MAX_WIDTH = 1256
export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: ${MAX_WIDTH}px;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: ${({ theme }) => theme.margins[9]}px;
`

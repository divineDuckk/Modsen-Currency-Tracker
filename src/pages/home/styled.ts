import styled from 'styled-components'

const MAX_WIDTH = 520

export const Category = styled.h3`
  width: 100%;
  max-width: ${MAX_WIDTH}px;
  font-size: ${({ theme }) => theme.fontSizes[9]}px;
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  line-height: ${({ theme }) => theme.lineHeights[5]}px;
  padding-bottom: ${({ theme }) => theme.paddings[0]}px;
  border-bottom: 1px solid ${({ theme }) => theme.colors['categoryBorder']};
  margin-bottom: ${({ theme }) => theme.margins[6]}px;
`
export const Main = styled.main`
  margin-bottom: ${({ theme }) => theme.margins[9]}px;
`

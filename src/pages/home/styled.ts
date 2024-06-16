import styled from 'styled-components'

const WIDTH = 123

export const Category = styled.h3`
  width: ${WIDTH}px;
  font-size: ${({ theme }) => theme.fontSizes[9]}px;
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  line-height: ${({ theme }) => theme.lineHeights[5]}px;
  padding-bottom: ${({ theme }) => theme.paddings[0]}px;
  border-bottom: 1px solid ${({ theme }) => theme.colors['categoryBorder']};
`

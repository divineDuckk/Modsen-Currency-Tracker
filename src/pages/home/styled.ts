import styled, { css } from 'styled-components'

const MAX_WIDTH = 520

export const Category = styled.h3`
  width: 100%;
  max-width: ${MAX_WIDTH}px;
  ${({ theme }) => css`
    font-size: ${theme.fontSizes[9]}px;
    font-weight: ${theme.fontWeights[0]};
    line-height: ${theme.lineHeights[5]}px;
    padding-bottom: ${theme.paddings[0]}px;
    border-bottom: 1px solid ${theme.colors['categoryBorder']};
    margin-bottom: ${theme.margins[7]}px;
  `}
`
export const Main = styled.main`
  margin-bottom: ${({ theme }) => theme.margins[10]}px;
`

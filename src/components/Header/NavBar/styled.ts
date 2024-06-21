import styled, { css } from 'styled-components'

export const NavContainer = styled.ul`
  display: flex;
  ${({ theme }) => css`
    gap: ${theme.gaps[5]}px;
    font-weight: ${theme.fontWeights[0]};
    font-size: ${theme.fontSizes[3]}px;
    line-height: ${theme.lineHeights[5]}px;
  `}
`
export const NavElement = styled.li`
  cursor: pointer;
`

import styled, { css } from 'styled-components'

const NAV_ELEM_TRANSITION = 0.2

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
  transition: ${NAV_ELEM_TRANSITION}s;
  &:hover {
    opacity: 1;
    filter: drop-shadow(0 0 0.5rem ${({ theme }) => theme.shadow});
  }
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    font-size: ${({ theme }) => theme.fontSizes[5]}px;
  }
`

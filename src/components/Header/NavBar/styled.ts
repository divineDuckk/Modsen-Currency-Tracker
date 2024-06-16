import styled from 'styled-components'

export const NavContainer = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.gaps[3]}px;
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  line-height: ${({ theme }) => theme.lineHeights[5]}px;
`
export const NavElement = styled.li`
  cursor: pointer;
`

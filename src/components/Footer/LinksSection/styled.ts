import styled, { css } from 'styled-components'

const LINK_OPACITY = 0.5
const LINK_TRANSITON = 0.3

export const LinksBlock = styled.section`
  display: flex;
  flex-direction: column;
  a {
    ${({ theme }) => css`
      font-weight: ${theme.fontWeights[1]};
      font-size: ${theme.fontSizes[4]}px;
      line-height: ${theme.lineHeights[3]}px;
      margin-bottom: ${theme.margins[0]}px;
      color: ${theme.textColor};
    `}

    opacity: ${LINK_OPACITY};
    transition: ${LINK_TRANSITON}s;
    &:hover {
      opacity: 1;
      filter: drop-shadow(0 0 0.75rem ${({ theme }) => theme.colors['white']});
    }
  }
`

export const LinksCategory = styled.h3`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeights[1]};
    font-size: ${theme.fontSizes[7]}px;
    line-height: ${theme.lineHeights[6]}px;
    margin-bottom: ${theme.margins[5]}px;
  `}
`

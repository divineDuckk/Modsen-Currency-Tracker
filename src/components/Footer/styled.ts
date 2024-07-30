import styled, { css } from 'styled-components'

const MINI_LOGO_WIDTH = 33
const MINI_LOGO_HEIGHT = 37
const MAX_WIDTH = 1256
const BOT_TEXT_MAX_WIDTH = 482
const BOT_TEXT_MAX_HEIGHT = 228
const FOOTER_BOT_TEXT_OPACITY = 0.5

export const FooterContainer = styled.footer`
  width: 100%;
  margin: 0 ${({ theme }) => theme.margins[2]}px;
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    width: auto;
  }
`
export const FooterMainContainer = styled.div`
  width: 100%;
  max-width: ${MAX_WIDTH}px;
  display: flex;
  margin: 0 auto;
  gap: ${({ theme }) => theme.gaps[4]}px;
  justify-content: space-between;
`
export const FooterMainText = styled.div``
export const TopBlock = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gaps[0]}px;
  margin-bottom: ${({ theme }) => theme.margins[5]}px;
`
export const TopText = styled.h3`
  background: ${({ theme }) => theme.colors['gradient']};
  background-clip: text;
  -webkit-text-fill-color: transparent;

  ${({ theme }) => css`
    font-weight: ${theme.fontWeights[3]};
    font-size: ${theme.fontSizes[6]}px;
    line-height: ${theme.lineHeights[4]}px;
  `}
`
export const BotText = styled.p`
  max-width: ${BOT_TEXT_MAX_WIDTH}px;
  height: ${BOT_TEXT_MAX_HEIGHT}px;
  ${({ theme }) => css`
    font-weight: ${theme.fontWeights[0]};
    font-size: ${theme.fontSizes[4]}px;
    line-height: ${theme.lineHeights[3]}px;
  `}
`
export const FooterBottomText = styled.h2`
  opacity: ${FOOTER_BOT_TEXT_OPACITY};
  text-align: center;
  ${({ theme }) => css`
    font-weight: ${theme.fontWeights[1]};
    font-size: ${theme.fontSizes[4]}px;
    line-height: ${theme.lineHeights[3]}px;
    margin: ${theme.margins[7]}px auto;
  `}
`

export const MiniLogo = styled.img`
  width: ${MINI_LOGO_WIDTH}px;
  height: ${MINI_LOGO_HEIGHT}px;
`
export const LinksContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: space-between;
  gap: ${({ theme }) => theme.gaps[0]}px;
`

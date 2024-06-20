import styled, { css } from 'styled-components'

const MAX_WIDTH_MAIN_TEXT = 700
const MAX_WIDTH_DESC_TEXT = 397
const TRANSLATE_VALUE = 63
const WIDTH = 1456
const IMAGE_WITDH = 300
const IMAGE_HEIGHT = 300

export const PosterWrapper = styled.div`
  display: flex;
  width: 100%;

  ${({ theme }) => css`
    background: ${theme.body === theme.colors['darkBody']
      ? theme.colors['posterBg']
      : theme.colors['posterLighterBg']};
    margin-bottom: ${theme.margins[6]}px;
    padding-bottom: ${theme.paddings[5]}px;
    padding-top: ${theme.paddings[1]}px;
  `}
`

export const PosterContainer = styled.div`
  width: 100%;
  max-width: ${WIDTH}px;
  display: flex;
  align-items: flex-end;
  gap: ${({ theme }) => theme.gaps[3]}px;
  justify-content: flex-start;
  margin-left: auto;
  margin-right: auto;
  padding-left: 3.5%;
`
export const MainText = styled.h1`
  max-width: ${MAX_WIDTH_MAIN_TEXT}px;
  -webkit-text-fill-color: transparent;
  text-align: right;
  ${({ theme }) => css`
    font-size: ${theme.fontSizes[12]}px;
    background: ${theme.colors['gradient']};
    background-clip: text;
    font-weight: ${theme.fontWeights[3]};
    line-height: ${theme.lineHeights[10]}px;
  `}
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
export const BigLogo = styled.img`
  width: ${IMAGE_WITDH}px;
  height: ${IMAGE_HEIGHT}px;
`

export const MainTextSpan = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes[13]}px;
    line-height: ${theme.lineHeights[11]}px;
  `}
`
export const Description = styled.p`
  transform: translateX(${TRANSLATE_VALUE}px);
  max-width: ${MAX_WIDTH_DESC_TEXT}px;
  text-align: center;

  ${({ theme }) => css`
    font-weight: ${theme.fontWeights[0]};
    color: ${theme.body === theme.colors['darkBody']
      ? theme.colors['gray']
      : theme.colors['darkBody']};
    line-height: ${theme.lineHeights[8]}px;
    font-size: ${theme.fontSizes[5]}px;
  `}
`

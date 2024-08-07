import styled, { css } from 'styled-components'

const MAX_WIDTH_MAIN_TEXT = 700
const MAX_WIDTH_DESC_TEXT = 397

const TRANSLATE_VALUE = 63
const WIDTH = 1456

const IMAGE_WITDH = 300
const IMAGE_HEIGHT = 300

const MINI_IMAGE_WITDH = 150
const MINI_IMAGE_HEIGHT = 150

export const PosterWrapper = styled.div`
  display: flex;
  width: 100%;

  ${({ theme }) => css`
    background: ${theme.colors['posterBg']};
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
    font-size: ${theme.fontSizes[13]}px;
    background: ${theme.colors['gradient']};
    background-clip: text;
    font-weight: ${theme.fontWeights[3]};
    line-height: ${theme.lineHeights[10]}px;
  `}
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    ${({ theme }) => css`
      font-size: ${theme.fontSizes[12]}px;
      line-height: ${theme.lineHeights[10]}px;
    `}
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
export const BigLogo = styled.img`
  width: ${IMAGE_WITDH}px;
  height: ${IMAGE_HEIGHT}px;
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    width: ${MINI_IMAGE_WITDH}px;
    height: ${MINI_IMAGE_HEIGHT}px;
  }
`

export const MainTextSpan = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes[14]}px;
    line-height: ${theme.lineHeights[11]}px;
  `}
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    ${({ theme }) => css`
      font-size: ${theme.fontSizes[12]}px;
      line-height: ${theme.lineHeights[10]}px;
    `}
  }
`
export const Description = styled.p`
  transform: translateX(${TRANSLATE_VALUE}px);
  max-width: ${MAX_WIDTH_DESC_TEXT}px;
  text-align: center;

  ${({ theme }) => css`
    font-weight: ${theme.fontWeights[0]};
    color: ${theme.hColor};
    line-height: ${theme.lineHeights[8]}px;
    font-size: ${theme.fontSizes[5]}px;
  `}
`

import styled from 'styled-components'

const MAX_WIDTH_MAIN_TEXT = 700
const MAX_WIDTH_DESC_TEXT = 397
const TRANSLATE_VALUE = 63
const WIDTH = 1456

export const PosterWrapper = styled.div`
  display: flex;
  width: 100%;
  background: ${({ theme }) => theme.colors['posterBg']};
  margin-bottom: ${({ theme }) => theme.margins[5]}px;
  padding-bottom: ${({ theme }) => theme.paddings[3]}px;
  padding-top: ${({ theme }) => theme.paddings[0]}px;
`

export const PosterContainer = styled.div`
  width: 100%;
  max-width: ${WIDTH}px;
  display: flex;
  gap: ${({ theme }) => theme.gaps[1]}px;

  justify-content: flex-start;
  margin-left: auto;
  margin-right: auto;
  padding-left: 3.5%;
`
export const MainText = styled.h1`
  max-width: ${MAX_WIDTH_MAIN_TEXT}px;
  font-size: ${({ theme }) => theme.fontSizes[12]}px;
  background: ${({ theme }) => theme.colors['gradient']};
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: ${({ theme }) => theme.lineHeights[10]}px;
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  text-align: right;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
export const BigLogo = styled.img``

export const MainTextSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSizes[13]}px;
  line-height: ${({ theme }) => theme.lineHeights[11]}px;
`
export const Description = styled.p`
  transform: translateX(${TRANSLATE_VALUE}px);
  max-width: ${MAX_WIDTH_DESC_TEXT}px;
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  color: ${({ theme }) => theme.colors['gray']};
  line-height: ${({ theme }) => theme.lineHeights[8]}px;
  font-size: ${({ theme }) => theme.fontSizes[5]}px;
`

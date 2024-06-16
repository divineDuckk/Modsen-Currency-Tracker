import {
  BigLogo,
  Description,
  MainText,
  MainTextSpan,
  PosterContainer,
  PosterWrapper,
  TextContainer,
} from './styled'
import bigLogo from '@/assets/bigLogo.svg'

export const Poster = () => {
  return (
    <PosterWrapper>
      <PosterContainer>
        <TextContainer>
          <MainText>
            Modsen Currency <MainTextSpan>Tracker</MainTextSpan>
          </MainText>
          <Description>
            Quotes for the dollar and other international currencies.
          </Description>
        </TextContainer>
        <BigLogo src={bigLogo} alt="biglogo" />
      </PosterContainer>
    </PosterWrapper>
  )
}

/* eslint-disable react/no-unescaped-entities */
import {
  BotText,
  FooterBottomText,
  FooterContainer,
  FooterMainContainer,
  FooterMainText,
  LinksContainer,
  MiniLogo,
  TopBlock,
  TopText,
} from './styled'
import miniLogo from '@/assets/miniLogo.svg'

import { LINKS_INFO } from './constants'
import { LinksSection } from './LinksSection'

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterMainContainer>
        <FooterMainText>
          <TopBlock>
            <MiniLogo src={miniLogo} alt="footer mini logo" />
            <TopText>Modsen Currency Tracker</TopText>
          </TopBlock>
          <BotText>
            Since then, the company has grown organically to. Starsup is the
            world's largest trading platform, with $12 billion worth of currency
            trading and 500,000 tickets sold daily to tens of thousands of
            traders worldwide.
          </BotText>
        </FooterMainText>
        <LinksContainer>
          {LINKS_INFO.map((info) => (
            <LinksSection
              category={info.category}
              linksNames={info.linksNames}
              key={info.category}
            />
          ))}
        </LinksContainer>
      </FooterMainContainer>
      <FooterBottomText>
        Startsup © 2023-2024, All Rights Reserved
      </FooterBottomText>
    </FooterContainer>
  )
}

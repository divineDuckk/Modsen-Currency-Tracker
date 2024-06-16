import miniLogo from '@/assets/miniLogo.svg'

import { NavBar } from './NavBar'
import { Poster } from './Poster'
import { HeaderContainer, Logo, TopPartWrapper } from './styles'
import { ThemeButton } from './ThemeButton'
import { UpdatedTime } from './UpdatedTime'

export const Header = () => {
  return (
    <HeaderContainer>
      <TopPartWrapper>
        <Logo src={miniLogo} alt="logo" />
        <NavBar />
        <ThemeButton />
      </TopPartWrapper>
      <Poster />
      <UpdatedTime />
    </HeaderContainer>
  )
}

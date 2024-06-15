import styled from 'styled-components'

const WIDTH = 1456

export const Logo = styled.img`
  width: 40px;
  height: 41px;
`
export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const TopPartWrapper = styled.div`
  width: 100%;
  display: flex;
  max-width: ${WIDTH}px;
  justify-content: space-between;
  align-items: center;

  padding: ${({ theme }) => theme.paddings[1]}px 5%
    ${({ theme }) => theme.paddings[0]}px 5%;
  margin-left: auto;
  margin-right: auto;
`

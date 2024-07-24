import styled from 'styled-components'

export const TimeLineContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps[1]}px;
  justify-content: center;
  align-items: center;
`

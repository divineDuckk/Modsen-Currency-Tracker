import { useAppSelector } from '@/store/hooks'
import { lastUpdatedAt } from '@/store/selectors/currencies'

import { LastTime, Point, SmallPoint, TimeBlock } from './styled'

export const UpdatedTime = () => {
  const time = useAppSelector(lastUpdatedAt)
  return (
    <TimeBlock>
      <Point>
        <SmallPoint />
      </Point>
      <LastTime>Last updated at {time}</LastTime>
    </TimeBlock>
  )
}

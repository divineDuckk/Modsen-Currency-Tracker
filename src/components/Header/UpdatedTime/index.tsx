import { useAppSelector } from '@/store/hooks'
import { last_updated_at } from '@/store/selectors/currencies'

import { LastTime, Point, SmallPoint, TimeBlock } from './styled'

export const UpdatedTime = () => {
  const time = useAppSelector(last_updated_at)
  console.log(time)
  return (
    <TimeBlock>
      <Point>
        <SmallPoint />
      </Point>
      <LastTime>Last updated at {time}</LastTime>
    </TimeBlock>
  )
}

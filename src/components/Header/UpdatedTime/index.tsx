import { useAppSelector } from '@/store/hooks'
import { lastUpdatedAt } from '@/store/selectors/currencies'
import { convertDate } from '@/utils/functions'

import { LastTime, Point, SmallPoint, TimeBlock } from './styled'

export const UpdatedTime = () => {
  const time = convertDate(useAppSelector(lastUpdatedAt))
  return (
    <TimeBlock>
      <Point>
        <SmallPoint />
      </Point>
      <LastTime>Last updated at {time}</LastTime>
    </TimeBlock>
  )
}

import { MAX_DAYS_VALUE } from '@/constants'
import { TimeLineDataStucture } from '@/interfaces'

export const PLACEHOLDERS = {
  high: 'Highest',
  low: 'Lowest',
  open: 'Open',
  close: 'Close',
}
export const MIN_VALUE = 0
export const MIN_GENERATE_VALUE = 5000
export const MAX_GENERATE_VALUE = 55000

export const isNeedToUpdateState = (
  data: TimeLineDataStucture[],
  date: string
) => {
  if (data.some((item) => item.date === date)) return false
  if (data.length === MAX_DAYS_VALUE) return false
  return true
}

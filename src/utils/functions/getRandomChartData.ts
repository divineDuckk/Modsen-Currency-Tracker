import { MAX_DAYS_VALUE } from '@/constants'
import { TimeLineDataStucture } from '@/interfaces'

const getRandomNumberInRange = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min

export const getRandomChartData = (
  min: number,
  max: number
): TimeLineDataStucture[] => {
  const dataPoints: TimeLineDataStucture[] = []
  const currentDate = new Date()
  currentDate.setHours(0, 0, 0, 0)

  let previousClose = getRandomNumberInRange(min, max)

  for (let i = 0; i < MAX_DAYS_VALUE; i++) {
    const open = previousClose
    const close = getRandomNumberInRange(min, max)
    const high = Math.max(open, close, getRandomNumberInRange(open, max))
    const low = Math.min(open, close, getRandomNumberInRange(min, close))

    const dataPoint: TimeLineDataStucture = {
      date: currentDate.toString(),
      open: open,
      high: high,
      low: low,
      close: close,
    }
    dataPoints.push(dataPoint)
    currentDate.setDate(currentDate.getDate() + 1)
    previousClose = close
  }
  return dataPoints
}

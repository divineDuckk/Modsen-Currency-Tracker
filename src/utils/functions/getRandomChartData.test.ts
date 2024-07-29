import { TimeLineDataStucture } from '@/interfaces'
import { MAX_DAYS_VALUE } from '@/constants'

import { getRandomChartData } from './getRandomChartData'

const isValidDataPoint = (
  dataPoint: TimeLineDataStucture,
  min: number,
  max: number
) => {
  return (
    typeof dataPoint.date === 'string' &&
    typeof dataPoint.open === 'number' &&
    typeof dataPoint.high === 'number' &&
    typeof dataPoint.low === 'number' &&
    typeof dataPoint.close === 'number' &&
    dataPoint.open >= min &&
    dataPoint.open <= max &&
    dataPoint.high >= min &&
    dataPoint.high <= max &&
    dataPoint.low >= min &&
    dataPoint.low <= max &&
    dataPoint.close >= min &&
    dataPoint.close <= max &&
    dataPoint.high >= dataPoint.open &&
    dataPoint.high >= dataPoint.close &&
    dataPoint.low <= dataPoint.open &&
    dataPoint.low <= dataPoint.close
  )
}

describe('getRandomChartData', () => {
  it('should return an array of the correct length', () => {
    const min = 10
    const max = 100
    const result = getRandomChartData(min, max)
    expect(result).toHaveLength(MAX_DAYS_VALUE)
  })

  it('should return an array of valid data points', () => {
    const min = 10
    const max = 100
    const result = getRandomChartData(min, max)
    result.forEach((dataPoint) => {
      expect(isValidDataPoint(dataPoint, min, max)).toBe(true)
    })
  })

  it('should handle cases where min and max are the same', () => {
    const min = 50
    const max = 50
    const result = getRandomChartData(min, max)
    result.forEach((dataPoint) => {
      expect(dataPoint.open).toBe(min)
      expect(dataPoint.high).toBe(min)
      expect(dataPoint.low).toBe(min)
      expect(dataPoint.close).toBe(min)
    })
  })

  it('should handle cases where min is greater than max', () => {
    const min = 100
    const max = 10
    const result = getRandomChartData(min, max)
    result.forEach((dataPoint) => {
      expect(dataPoint.open).toBeGreaterThanOrEqual(max)
      expect(dataPoint.open).toBeLessThanOrEqual(min)
      expect(dataPoint.high).toBeGreaterThanOrEqual(max)
      expect(dataPoint.high).toBeLessThanOrEqual(min)
      expect(dataPoint.low).toBeGreaterThanOrEqual(max)
      expect(dataPoint.low).toBeLessThanOrEqual(min)
      expect(dataPoint.close).toBeGreaterThanOrEqual(max)
      expect(dataPoint.close).toBeLessThanOrEqual(min)
    })
  })
})

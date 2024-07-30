import { TimeLineDataStucture, CustomDataPoint } from '@/interfaces'

import { timeLineDataToChartData } from './timeLineDataToChartData'

describe('timeLineDataToChartData', () => {
  it('should convert TimeLineDataStucture to CustomDataPoint correctly', () => {
    const input: TimeLineDataStucture[] = [
      {
        date: '2024-07-28T00:00:00Z',
        open: 100,
        high: 110,
        low: 90,
        close: 105,
      },
      {
        date: '2024-07-29T00:00:00Z',
        open: 105,
        high: 115,
        low: 95,
        close: 110,
      },
    ]

    const expected: CustomDataPoint[] = [
      {
        c: 105,
        h: 110,
        l: 90,
        o: 100,
        x: new Date('2024-07-28T00:00:00Z').setHours(0, 0, 0, 0),
        s: [100, 105],
      },
      {
        c: 110,
        h: 115,
        l: 95,
        o: 105,
        x: new Date('2024-07-29T00:00:00Z').setHours(0, 0, 0, 0),
        s: [105, 110],
      },
    ]

    const result = timeLineDataToChartData(input)

    expect(result).toEqual(expected)
  })

  it('should handle an empty array', () => {
    const input: TimeLineDataStucture[] = []
    const expected: CustomDataPoint[] = []
    const result = timeLineDataToChartData(input)
    expect(result).toEqual(expected)
  })

  it('should handle a single data point', () => {
    const input: TimeLineDataStucture[] = [
      {
        date: '2024-07-28T00:00:00Z',
        open: 100,
        high: 110,
        low: 90,
        close: 105,
      },
    ]

    const expected: CustomDataPoint[] = [
      {
        c: 105,
        h: 110,
        l: 90,
        o: 100,
        x: new Date('2024-07-28T00:00:00Z').setHours(0, 0, 0, 0),
        s: [100, 105],
      },
    ]

    const result = timeLineDataToChartData(input)

    expect(result).toEqual(expected)
  })
})

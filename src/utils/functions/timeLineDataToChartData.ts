import { CustomDataPoint, TimeLineDataStucture } from '@/interfaces'

export const timeLineDataToChartData = (
  data: TimeLineDataStucture[]
): CustomDataPoint[] => {
  return data.map((el) => ({
    c: el.close,
    h: el.high,
    l: el.low,
    o: el.open,
    x: new Date(el.date).setHours(0, 0, 0, 0),
    s: [el.open, el.close],
  }))
}

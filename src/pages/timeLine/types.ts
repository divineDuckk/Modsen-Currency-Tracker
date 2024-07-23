import { TimeLineDataStucture } from '@/interfaces'

export interface TimeLineState {
  data: TimeLineDataStucture[]
  date: string
  open: string
  close: string
  low: string
  high: string
}

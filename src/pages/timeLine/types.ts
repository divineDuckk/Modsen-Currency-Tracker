import { TimeLineDataStucture } from '@/interfaces'

export interface TimeLineState {
  data: TimeLineDataStucture[]
  selectedType: string
  notificationActive: boolean
}

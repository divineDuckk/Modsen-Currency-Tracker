import { TimeLineDataStucture } from '@/interfaces'

export interface TimeLineButtonsState {
  date: string
  open: string
  close: string
  low: string
  high: string
}
export interface TimeLineButtonsProps {
  setTimeLineData: React.Dispatch<
    React.SetStateAction<{ data: TimeLineDataStucture[] }>
  >
  data: TimeLineDataStucture[]
  selectedType: string
  setSelectedType: React.Dispatch<
    React.SetStateAction<{ selectedType: string }>
  >
}

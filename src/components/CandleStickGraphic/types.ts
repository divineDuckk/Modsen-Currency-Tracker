import { DefaultTheme } from 'styled-components'

import { TimeLineDataStucture } from '@/interfaces'

export interface CandleStickGraphicProps {
  theme: DefaultTheme
  data: TimeLineDataStucture[]
  selectedType: string
}

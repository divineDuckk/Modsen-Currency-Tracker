import { DefaultTheme } from 'styled-components'

import { TimeLineDataStucture } from '@/interfaces'
import { SYMBOLS_TYPE } from '@/types'

export interface CandleStickGraphicProps {
  theme: DefaultTheme
  data: TimeLineDataStucture[]
  selectedType: SYMBOLS_TYPE
}

import { CURRENCY_TO_SHORTNAME_VOCAB } from '@/constants'
import { CurrencyCode } from '@/types'

interface CurrencyInfo {
  name: CurrencyCode
  fullname: string
  value: number
}

export interface CardPopUpProps {
  handleClose: () => void
  currencyInfo: CurrencyInfo
}
export interface CurrencyButtonAttrs {
  $is_choosen: boolean
}
export type CurrencyKey = keyof typeof CURRENCY_TO_SHORTNAME_VOCAB

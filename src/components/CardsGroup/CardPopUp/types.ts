import { CurrencyCode } from '@/types'

interface CurrencyInfo {
  name: CurrencyCode
  fullname: string
  value: number
}

export interface CardPopUpProps {
  onClose: () => void
  currencyInfo: CurrencyInfo
}

import { CurrencyCode } from '@/types'

export interface CardProps {
  name: CurrencyCode
  value: number | string
}
export interface CardContainerAttrs {
  $isStock: boolean
}

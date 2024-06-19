import { CurrencyCode } from '@/types'

export interface CardProps {
  name: CurrencyCode
  value: number | string
}
export interface CardContainerAttrs {
  $is_stock: boolean
}

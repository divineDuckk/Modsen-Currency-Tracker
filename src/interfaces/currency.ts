import { CurrencyCode } from '@/types'

export interface CurrencyInfo {
  fullname: string
  image: string
}
export interface Stock {
  name: CurrencyCode
  value: number | string
}
export interface CurrencyData {
  code: CurrencyCode
  value: number
}
export interface ReturnsFetchCurrenciesData {
  data: CurrencyData[]
  time: string
}

export interface MockData {
  meta: {
    last_updated_at: string
  }
  data: Record<string, CurrencyData>
}

export interface Response {
  data: {
    meta: {
      last_updated_at: string
    }
    data: CurrencyData[]
  }
}
export interface CurrencyInitialState {
  lastUpdatedAt: string
  homeCurrencies: CurrencyData[]
  selectedCurrencies: Record<string, CurrencyData[]>
  status: string
  selectedCurrencyStatus: string
}

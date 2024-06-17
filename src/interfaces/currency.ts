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
export interface MockData {
  meta: {
    last_updated_at: string
  }
  data: {
    [key: string]: CurrencyData
  }
}

export interface SelectedCurrenciesData {
  [key: string]: CurrencyData[]
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
  last_updated_at: string
  homeCurrencies: CurrencyData[]
  selectedCurrencies: SelectedCurrenciesData
  status: string
}

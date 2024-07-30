import { FULLNAME_TO_CURRENCIES_SYMBOLS } from '@/constants'

export type CurrencyCode =
  | 'ARS'
  | 'AUD'
  | 'BTC'
  | 'CAD'
  | 'CNY'
  | 'EUR'
  | 'JPY'
  | 'LRD'
  | 'USD'
  | 'Bovespa Index'
  | 'IFIX'

export type SYMBOLS_TYPE = keyof typeof FULLNAME_TO_CURRENCIES_SYMBOLS

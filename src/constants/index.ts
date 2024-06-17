import { CurrencyCode } from '@/types'
import { CurrencyInfo, MockData, Stock } from '@/interfaces'
import ARS_LOGO from '@/assets/peso.svg'
import AUD_LOGO from '@/assets/australianDollar.svg'
import BOV_LOGO from '@/assets/bovespa.svg'
import BTC_LOGO from '@/assets/bitcoin.svg'
import CAD_LOGO from '@/assets/canadianDollar.svg'
import CNY_LOGO from '@/assets/won.svg'
import EUR_LOGO from '@/assets/euro.svg'
import IFIX_LOGO from '@/assets/ifix.svg'
import JPY_LOGO from '@/assets/yen.svg'
import LRD_LOGO from '@/assets/libra.svg'
import USD_LOGO from '@/assets/dollar.svg'

export const DARK = 'dark'
export const LIGHT = 'light'
export const DEAFAULT_CURRENCY = 'USD'

export const CURRENCY_API_KEY =
  'cur_live_MCimyXopG0Ya1irUYz1qg2bD3QVsmMh6HJXcRFsL'
export const URL = `https://api.currencyapi.com/v3/latest?apikey=${CURRENCY_API_KEY}`
export const MOCK_DATA: MockData = {
  meta: {
    last_updated_at: '2024-06-15T23:59:59Z',
  },
  data: {
    ARS: {
      code: 'ARS',
      value: 903.0675024602,
    },
    AUD: {
      code: 'AUD',
      value: 1.5116601982,
    },
    BTC: {
      code: 'BTC',
      value: 0.0000149971,
    },
    CAD: {
      code: 'CAD',
      value: 1.3735601693,
    },
    CNY: {
      code: 'CNY',
      value: 7.2548910545,
    },
    EUR: {
      code: 'EUR',
      value: 0.9338301459,
    },
    JPY: {
      code: 'JPY',
      value: 157.3665377162,
    },
    LRD: {
      code: 'LRD',
      value: 194.0970321143,
    },
    USD: {
      code: 'USD',
      value: 1,
    },
  },
}

export const CASH_VOCAB: Record<CurrencyCode, CurrencyInfo> = {
  ARS: { fullname: 'Argentine Peso', image: ARS_LOGO },
  AUD: { fullname: 'Australian Dollar', image: AUD_LOGO },
  BTC: { fullname: 'Bitcoin', image: BTC_LOGO },
  CAD: { fullname: 'Canadian Dollar', image: CAD_LOGO },
  CNY: { fullname: 'Yuan', image: CNY_LOGO },
  EUR: { fullname: 'Euro', image: EUR_LOGO },
  JPY: { fullname: 'Yen', image: JPY_LOGO },
  LRD: { fullname: 'Libra', image: LRD_LOGO },
  USD: { fullname: 'Commercial Dollar', image: USD_LOGO },
  'Bovespa Index': { fullname: 'Bovespa Index', image: BOV_LOGO },
  IFIX: { fullname: 'IFIX', image: IFIX_LOGO },
}
export const STOCKS: Stock[] = [
  { name: 'Bovespa Index', value: '0.15%' },
  { name: 'IFIX', value: '0.15%' },
]

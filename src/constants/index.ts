/* eslint-disable @typescript-eslint/no-duplicate-enum-values */
import { CurrencyCode } from '@/types'
import { CurrencyInfo, CustomDataPoint, MockData, Stock } from '@/interfaces'
import { Home } from '@/pages/home'
import { TimeLine } from '@/pages/timeLine'
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

export const CURRENCIES_FULLNAME = [
  'Argentine Peso',
  'Australian Dollar',
  'Bitcoin',
  'Canadian Dollar',
  'Yuan',
  'Euro',
  'Libra',
  'Commercial Dollar',
  'Yen',
]
export enum FULLNAME_TO_CURRENCIES_SYMBOLS {
  'Argentine Peso' = '$',
  'Australian Dollar' = '$',
  Bitcoin = '₿',
  'Canadian Dollar' = '$',
  Yuan = '¥',
  Euro = '€',
  Libra = '$',
  'Commercial Dollar' = '$',
  Yen = '¥',
}
export const CURRENCY_TO_SHORTNAME_VOCAB = {
  'Argentine Peso': 'ARS',
  'Australian Dollar': 'AUD',
  Bitcoin: 'BTC',
  'Canadian Dollar': 'CAD',
  Yuan: 'CNY',
  Euro: 'EUR',
  Yen: 'JPY',
  Libra: 'LRD',
  'Commercial Dollar': 'USD',
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
export const MAX_DAYS_VALUE = 30

export const RoutesArr = [
  { path: '/', Page: Home },
  { path: '/timeline', Page: TimeLine },
  { path: '/bank_card', Page: 'div' },
  { path: '/contato', Page: 'div' },
]

export const HISTORY_MOCK_DATA: CustomDataPoint[] = [
  {
    x: new Date('2022-06-01').setHours(0, 0, 0, 0),
    o: 10000.25,
    h: 12312.35,
    l: 9231.0,
    c: 11232.1,
    s: [10000.25, 11232.1],
  },
  {
    x: new Date('2022-06-02').setHours(0, 0, 0, 0),
    o: 22222.15,
    h: 33333.35,
    l: 11111.0,
    c: 41241.1,
    s: [22222.15, 41241.1],
  },
  {
    x: new Date('2022-06-03').setHours(0, 0, 0, 0),
    o: 51231.55,
    h: 24111.35,
    l: 24566.4,
    c: 312.6,
    s: [51231.55, 312.6],
  },
  {
    x: new Date('2022-06-04').setHours(0, 0, 0, 0),
    o: 51240.0,
    h: 12514.35,
    l: 22111.4,
    c: 55555.3,
    s: [51240.0, 55555.3],
  },
  {
    x: new Date('2022-06-05').setHours(0, 0, 0, 0),
    o: 21312.0,
    h: 22222.35,
    l: 55512.4,
    c: 11111.3,
    s: [21312.0, 11111.3],
  },
  {
    x: new Date('2022-06-06').setHours(0, 0, 0, 0),
    o: 99312.0,
    h: 32132.35,
    l: 11110.4,
    c: 22222.3,
    s: [99312.0, 22222.3],
  },
  {
    x: new Date('2022-06-07').setHours(0, 0, 0, 0),
    o: 31232.0,
    h: 42132.35,
    l: 41261.4,
    c: 41267.3,
    s: [31232.0, 41267.3],
  },
  {
    x: new Date('2022-06-08').setHours(0, 0, 0, 0),
    o: 31231.0,
    h: 54352.35,
    l: 54124.4,
    c: 98975.3,
    s: [31231.0, 98975.3],
  },
  {
    x: new Date('2022-06-09').setHours(0, 0, 0, 0),
    o: 93721.0,
    h: 88444.35,
    l: 44666.4,
    c: 51544.3,
    s: [93720.0, 51544.3],
  },
  {
    x: new Date('2022-06-10').setHours(0, 0, 0, 0),
    o: 21111.0,
    h: 2222.35,
    l: 3141.4,
    c: 22.3,
    s: [21111.0, 22.3],
  },
  {
    x: new Date('2022-06-11').setHours(0, 0, 0, 0),
    o: 22111.0,
    h: 11222.35,
    l: 28141.4,
    c: 22222.3,
    s: [22111.0, 22222.3],
  },
  {
    x: new Date('2022-06-12').setHours(0, 0, 0, 0),
    o: 32111.0,
    h: 11222.35,
    l: 18141.4,
    c: 22222.3,
    s: [32111.0, 22222.3],
  },
  {
    x: new Date('2022-06-13').setHours(0, 0, 0, 0),
    o: 12111.0,
    h: 41222.35,
    l: 88141.4,
    c: 52222.3,
    s: [12111.0, 52222.3],
  },
  {
    x: new Date('2022-06-14').setHours(0, 0, 0, 0),
    o: 99312.0,
    h: 32132.35,
    l: 11110.4,
    c: 22222.3,
    s: [99312.0, 22222.3],
  },
  {
    x: new Date('2022-06-15').setHours(0, 0, 0, 0),
    o: 31232.0,
    h: 42132.35,
    l: 41261.4,
    c: 41267.3,
    s: [31232.0, 41267.3],
  },
  {
    x: new Date('2022-06-16').setHours(0, 0, 0, 0),
    o: 31231.0,
    h: 54352.35,
    l: 54124.4,
    c: 98975.3,
    s: [31231.0, 98975.3],
  },
  {
    x: new Date('2022-06-17').setHours(0, 0, 0, 0),
    o: 93721.0,
    h: 88444.35,
    l: 44666.4,
    c: 51544.3,
    s: [93720.0, 51544.3],
  },
  {
    x: new Date('2022-06-18').setHours(0, 0, 0, 0),
    o: 59312.0,
    h: 32232.35,
    l: 12110.4,
    c: 21222.3,
    s: [59312.0, 21222.3],
  },
  {
    x: new Date('2022-06-19').setHours(0, 0, 0, 0),
    o: 11232.0,
    h: 42132.35,
    l: 41261.4,
    c: 41267.3,
    s: [11232.0, 41267.3],
  },
  {
    x: new Date('2022-06-20').setHours(0, 0, 0, 0),
    o: 31231.0,
    h: 54352.35,
    l: 54124.4,
    c: 98975.3,
    s: [31231.0, 98975.3],
  },
  {
    x: new Date('2022-06-21').setHours(0, 0, 0, 0),
    o: 73721.0,
    h: 38444.35,
    l: 24666.4,
    c: 11544.3,
    s: [73720.0, 11544.3],
  },
  {
    x: new Date('2022-06-22').setHours(0, 0, 0, 0),
    o: 76721.0,
    h: 36444.35,
    l: 27666.4,
    c: 18544.3,
    s: [76720.0, 18544.3],
  },
  {
    x: new Date('2022-06-23').setHours(0, 0, 0, 0),
    o: 76721.0,
    h: 36444.35,
    l: 27666.4,
    c: 2544.3,
    s: [76720.0, 2544.3],
  },
  {
    x: new Date('2022-06-24').setHours(0, 0, 0, 0),
    o: 26721.0,
    h: 36444.35,
    l: 8666.4,
    c: 12544.3,
    s: [26720.0, 12544.3],
  },
  {
    x: new Date('2022-06-25').setHours(0, 0, 0, 0),
    o: 59312.0,
    h: 32232.35,
    l: 12110.4,
    c: 21222.3,
    s: [59312.0, 21222.3],
  },
  {
    x: new Date('2022-06-26').setHours(0, 0, 0, 0),
    o: 11232.0,
    h: 42132.35,
    l: 41261.4,
    c: 41267.3,
    s: [11232.0, 41267.3],
  },
  {
    x: new Date('2022-06-27').setHours(0, 0, 0, 0),
    o: 31441.0,
    h: 54352.35,
    l: 54124.4,
    c: 98944.3,
    s: [31441.0, 98944.3],
  },
  {
    x: new Date('2022-06-28').setHours(0, 0, 0, 0),
    o: 99312.0,
    h: 32132.35,
    l: 11110.4,
    c: 22222.3,
    s: [99312.0, 22222.3],
  },
  {
    x: new Date('2022-06-29').setHours(0, 0, 0, 0),
    o: 31232.0,
    h: 42132.35,
    l: 41261.4,
    c: 41267.3,
    s: [31232.0, 41267.3],
  },
  {
    x: new Date('2022-06-30').setHours(0, 0, 0, 0),
    o: 31231.0,
    h: 54352.35,
    l: 54124.4,
    c: 98975.3,
    s: [31231.0, 98975.3],
  },
]

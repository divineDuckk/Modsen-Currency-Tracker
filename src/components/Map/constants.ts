import { Bank } from '@/interfaces'

export const MY_LNG = 55.1596229
export const MY_LAT = 30.2060241
export const ZOOM = 9

export const MOCK_BANKS: Bank[] = [
  {
    id: 1,
    name: 'Prior bank',
    currencies: ['CAD', 'USD', 'JPY', 'EUR', 'CNY'],
    coordinate: { lat: 30.2080241, lng: 55.1576229 },
  },
  {
    id: 2,
    name: 'Belarus bank',
    currencies: ['BTC', 'USD', 'JPY', 'EUR', 'LRD'],
    coordinate: { lat: 30.20841, lng: 55.151 },
  },
  {
    id: 3,
    name: 'Prior bank',
    currencies: ['AUD', 'USD', 'EUR'],
    coordinate: { lat: 30.21041, lng: 55.156 },
  },
  {
    id: 4,
    name: 'Alpha bank',
    currencies: ['BTC', 'CAD', 'USD', 'JPY', 'EUR', 'CNY', 'LRD', 'ARS'],
    coordinate: { lat: 30.2123, lng: 55.139 },
  },
  {
    id: 5,
    name: 'Belinvest bank',
    currencies: ['AUD', 'USD'],
    coordinate: { lat: 30.213867, lng: 55.1521665 },
  },
  {
    id: 6,
    name: 'Belinvest bank',
    currencies: ['CAD', 'USD', 'YEN', 'EUR', 'CNY'],
    coordinate: { lat: 30.20977, lng: 55.1555 },
  },
]

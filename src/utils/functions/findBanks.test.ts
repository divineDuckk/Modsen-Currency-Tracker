import { Bank } from '@/interfaces'

import { findBanks } from './findBanks'

describe('check findBanks', () => {
  it('should return banks when there is USD', () => {
    const currency = 'USD'
    const result = [
      {
        id: 1,
        name: 'Prior bank',
        currencies: ['CAD', 'USD', 'EUR', 'CNY'],
        coordinate: { lat: 30.2080241, lng: 55.1576229 },
      },
      {
        id: 2,
        name: 'Belarus bank',
        currencies: ['BTC', 'USD', 'EUR', 'LRD'],
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
        currencies: ['CAD', 'USD', 'JPY', 'EUR', 'CNY'],
        coordinate: { lat: 30.20977, lng: 55.1555 },
      },
    ]
    expect(findBanks(currency)).toStrictEqual(result)
  })
  it('should return banks when there is CAD', () => {
    const currency = 'CAD'
    const result = [
      {
        id: 1,
        name: 'Prior bank',
        currencies: ['CAD', 'USD', 'EUR', 'CNY'],
        coordinate: { lat: 30.2080241, lng: 55.1576229 },
      },

      {
        id: 4,
        name: 'Alpha bank',
        currencies: ['BTC', 'CAD', 'USD', 'JPY', 'EUR', 'CNY', 'LRD', 'ARS'],
        coordinate: { lat: 30.2123, lng: 55.139 },
      },

      {
        id: 6,
        name: 'Belinvest bank',
        currencies: ['CAD', 'USD', 'JPY', 'EUR', 'CNY'],
        coordinate: { lat: 30.20977, lng: 55.1555 },
      },
    ]
    expect(findBanks(currency)).toStrictEqual(result)
  })
  it('should return banks when there is JPY', () => {
    const currency = 'JPY'
    const result = [
      {
        id: 4,
        name: 'Alpha bank',
        currencies: ['BTC', 'CAD', 'USD', 'JPY', 'EUR', 'CNY', 'LRD', 'ARS'],
        coordinate: { lat: 30.2123, lng: 55.139 },
      },

      {
        id: 6,
        name: 'Belinvest bank',
        currencies: ['CAD', 'USD', 'JPY', 'EUR', 'CNY'],
        coordinate: { lat: 30.20977, lng: 55.1555 },
      },
    ]
    expect(findBanks(currency)).toStrictEqual(result)
  })
  it('should return banks when there is EUR', () => {
    const currency = 'EUR'
    const result = [
      {
        id: 1,
        name: 'Prior bank',
        currencies: ['CAD', 'USD', 'EUR', 'CNY'],
        coordinate: { lat: 30.2080241, lng: 55.1576229 },
      },
      {
        id: 2,
        name: 'Belarus bank',
        currencies: ['BTC', 'USD', 'EUR', 'LRD'],
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
        id: 6,
        name: 'Belinvest bank',
        currencies: ['CAD', 'USD', 'JPY', 'EUR', 'CNY'],
        coordinate: { lat: 30.20977, lng: 55.1555 },
      },
    ]
    expect(findBanks(currency)).toStrictEqual(result)
  })
  it('should return banks when there is nothing', () => {
    const currency = ''
    const result: Bank[] = []
    expect(findBanks(currency)).toStrictEqual(result)
  })
  it('should return banks when there is nothing', () => {
    const currency = 'USDT'
    const result: Bank[] = []
    expect(findBanks(currency)).toStrictEqual(result)
  })
})

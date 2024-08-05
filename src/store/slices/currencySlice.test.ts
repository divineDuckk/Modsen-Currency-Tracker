import { CurrencyInitialState, CurrencyData } from '@/interfaces'

import { fetchCurrencies } from '../thunks/fetchCurrencies'
import { fetchSelectedCurrencies } from '../thunks/fetchSelectedCurrencies'
import currencyReducer from './currencySlice'

describe('currencySlice', () => {
  const initialState: CurrencyInitialState = {
    homeCurrencies: [],
    selectedCurrencies: {},
    status: '',
    lastUpdatedAt: '',
    selectedCurrencyStatus: '',
  }
  it('should return the initial state', () => {
    expect(currencyReducer(undefined, { type: '' })).toEqual(initialState)
  })

  it('should handle fetchCurrencies.fulfilled', () => {
    const previousState = {
      homeCurrencies: [],
      selectedCurrencies: {},
      status: '',
      lastUpdatedAt: '',
      selectedCurrencyStatus: '',
    }
    const action = {
      type: fetchCurrencies.fulfilled.type,
      payload: {
        data: [{ code: 'USD', value: 1 }] as CurrencyData[],
        time: '2024-07-29T00:00:00Z',
      },
    }
    const expectedState = {
      homeCurrencies: [{ code: 'USD', value: 1 }],
      selectedCurrencies: {},
      status: 'done',
      lastUpdatedAt: '2024-07-29T00:00:00Z',
      selectedCurrencyStatus: 'done',
    }

    expect(currencyReducer(previousState, action)).toEqual(expectedState)
  })

  it('should handle fetchSelectedCurrencies.fulfilled', () => {
    const previousState = {
      homeCurrencies: [],
      selectedCurrencies: {},
      status: '',
      lastUpdatedAt: '',
      selectedCurrencyStatus: '',
    }
    const action = {
      type: fetchSelectedCurrencies.fulfilled.type,
      payload: {
        USD: [{ code: 'USD', value: 1 }] as CurrencyData[],
        EUR: [{ code: 'EUR', value: 0.9 }] as CurrencyData[],
      },
    }
    const expectedState = {
      homeCurrencies: [],
      selectedCurrencies: {
        USD: [{ code: 'USD', value: 1 }],
        EUR: [{ code: 'EUR', value: 0.9 }],
      },
      status: '',
      selectedCurrencyStatus: '',
      lastUpdatedAt: '',
    }
    expect(currencyReducer(previousState, action)).toEqual(expectedState)
  })

  it('should handle fetchCurrencies.pending', () => {
    const previousState = {
      homeCurrencies: [],
      selectedCurrencies: {},
      status: '',
      lastUpdatedAt: '',
      selectedCurrencyStatus: '',
    }
    const action = {
      type: fetchCurrencies.pending.type,
    }
    const expectedState = {
      homeCurrencies: [],
      selectedCurrencies: {},
      status: '',
      lastUpdatedAt: '',
      selectedCurrencyStatus: '',
    }
    expect(currencyReducer(previousState, action)).toEqual(expectedState)
  })

  it('should handle fetchCurrencies.rejected', () => {
    const previousState = {
      homeCurrencies: [],
      selectedCurrencies: {},
      status: '',
      selectedCurrencyStatus: '',
      lastUpdatedAt: '',
    }
    const action = {
      type: fetchCurrencies.rejected.type,
    }
    const expectedState = {
      homeCurrencies: [],
      selectedCurrencies: {},
      status: 'failed',
      lastUpdatedAt: '',
      selectedCurrencyStatus: 'failed',
    }
    expect(currencyReducer(previousState, action)).toEqual(expectedState)
  })
})

import axios from 'axios'

import { createAsyncThunk } from '@reduxjs/toolkit'
import { DEAFAULT_CURRENCY, URL } from '@/constants'
import { Response, SelectedCurrenciesData } from '@/interfaces'

const currencies = 'BTC,USD,EUR,ARS,JPY,CNY,AUD,CAD,LRD'
export const fetchSelectedCurrencies = createAsyncThunk<
  SelectedCurrenciesData,
  string
>(
  'currencies/fetchSelectedCurrencies',
  async (currency = DEAFAULT_CURRENCY) => {
    try {
      const filtredCurrencies = currencies.replace(`${currency},`, '')
      const res: Response = await axios.get(URL, {
        params: {
          currencies: filtredCurrencies,
          base_currency: currency,
        },
      })
      const result = Object.values(res.data.data)
      const resData: SelectedCurrenciesData = {}
      resData[currency] = result
      return resData
    } catch (error) {
      throw new Error('failed to fetch currencies')
    }
  }
)

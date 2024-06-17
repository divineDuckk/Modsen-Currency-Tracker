import axios from 'axios'

import { createAsyncThunk } from '@reduxjs/toolkit'
import { URL } from '@/constants'
import { CurrencyData } from '@/interfaces'

const currencies = 'BTC,USD,EUR,ARS,JPY,CNY,AUD,CAD,LRD'
export const fetchCurrencies = createAsyncThunk<CurrencyData[]>(
  'currencies/fetchCurrencies',
  async () => {
    try {
      const res = await axios.get(URL, {
        params: {
          currencies,
        },
      })
      return Object.values(res.data['data'])
    } catch (error) {
      throw new Error('failed to fetch currencies')
    }
  }
)

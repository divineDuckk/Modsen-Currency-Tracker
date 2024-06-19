import axios from 'axios'

import { createAsyncThunk } from '@reduxjs/toolkit'
import { URL } from '@/constants'
import { ReturnsFetchCurrenciesData } from '@/interfaces'

const currencies = 'BTC,USD,EUR,ARS,JPY,CNY,AUD,CAD,LRD'
export const fetchCurrencies = createAsyncThunk<ReturnsFetchCurrenciesData>(
  'currencies/fetchCurrencies',
  async () => {
    try {
      const res = await axios.get(URL, {
        params: {
          currencies,
        },
      })
      return {
        data: Object.values(res.data['data']),
        time: res.data.meta.last_updated_at,
      }
    } catch (error) {
      throw new Error('failed to fetch currencies')
    }
  }
)

import axios from 'axios'

import { createAsyncThunk } from '@reduxjs/toolkit'
import { DEAFAULT_CURRENCY } from '@/constants'
import { CurrencyData, Response } from '@/interfaces'

const currencies = 'BTC,USD,EUR,ARS,JPY,CNY,AUD,CAD,LRD,'
export const fetchSelectedCurrencies = createAsyncThunk<
  Record<string, CurrencyData[]>,
  string
>(
  'currencies/fetchSelectedCurrencies',
  async (currency = DEAFAULT_CURRENCY) => {
    try {
      console.log(currency)
      let filtredCurrencies = currencies.replace(`${currency},`, '')
      if (filtredCurrencies[filtredCurrencies.length - 1] === ',') {
        filtredCurrencies = filtredCurrencies.substring(
          0,
          filtredCurrencies.length - 1
        )
      }
      const res: Response = await axios.get(process.env.CURRENCY_API_URL, {
        params: {
          currencies: filtredCurrencies,
          base_currency: currency,
        },
      })
      console.log(res.data)
      const result = Object.values(res.data.data)
      const resData: Record<string, CurrencyData[]> = {}
      resData[currency] = result
      return resData
    } catch (error) {
      throw new Error('failed to fetch currencies')
    }
  }
)

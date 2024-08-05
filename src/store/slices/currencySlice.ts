import {
  CurrencyData,
  CurrencyInitialState,
  ReturnsFetchCurrenciesData,
} from '@/interfaces'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { fetchCurrencies } from '@/store/thunks/fetchCurrencies'
import { fetchSelectedCurrencies } from '@/store/thunks/fetchSelectedCurrencies'
import { STATUS } from '@/constants'

const initialState: CurrencyInitialState = {
  homeCurrencies: [],
  selectedCurrencies: {},
  status: '',
  lastUpdatedAt: '',
  selectedCurrencyStatus: '',
}

const currencySlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencies.pending, (state) => {
        state.status = STATUS.pending
      })
      .addCase(fetchSelectedCurrencies.pending, (state) => {
        state.selectedCurrencyStatus = STATUS.pending
      })
      .addCase(
        fetchCurrencies.fulfilled,
        (state, action: PayloadAction<ReturnsFetchCurrenciesData>) => {
          state.homeCurrencies = [...action.payload.data]
          state.lastUpdatedAt = action.payload.time
          state.status = STATUS.done
        }
      )
      .addCase(
        fetchSelectedCurrencies.fulfilled,
        (state, action: PayloadAction<Record<string, CurrencyData[]>>) => {
          state.selectedCurrencies = {
            ...state.selectedCurrencies,
            ...action.payload,
          }
          state.selectedCurrencyStatus = STATUS.done
        }
      )

      .addCase(fetchCurrencies.rejected, (state) => {
        state.status = STATUS.failed
      })
      .addCase(fetchSelectedCurrencies.rejected, (state) => {
        state.selectedCurrencyStatus = STATUS.failed
      })
  },
})

export default currencySlice.reducer

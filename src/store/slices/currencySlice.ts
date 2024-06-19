import {
  CurrencyData,
  CurrencyInitialState,
  SelectedCurrenciesData,
} from '@/interfaces'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { fetchCurrencies } from '@/store/thunks/fetchCurrencies'
import { fetchSelectedCurrencies } from '@/store/thunks/fetchSelectedCurrencies'

const initialState: CurrencyInitialState = {
  homeCurrencies: [],
  selectedCurrencies: {},
  status: '',
  last_updated_at: '',
}

const currencySlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    setUpdateTime: (state, action) => {
      state.last_updated_at = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencies.pending, (state) => {
        state.status = ''
      })
      .addCase(
        fetchCurrencies.fulfilled,
        (state, action: PayloadAction<CurrencyData[]>) => {
          state.homeCurrencies = [...action.payload]
          state.status = 'done'
        }
      )
      .addCase(
        fetchSelectedCurrencies.fulfilled,
        (state, action: PayloadAction<SelectedCurrenciesData>) => {
          state.selectedCurrencies = {
            ...state.selectedCurrencies,
            ...action.payload,
          }
        }
      )
      .addCase(fetchCurrencies.rejected, (state) => {
        state.status = 'failed'
      })
  },
})

export default currencySlice.reducer
export const { setUpdateTime } = currencySlice.actions

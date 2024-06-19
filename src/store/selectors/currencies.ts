import { RootState } from '@/store/types'

export const currencies = (state: RootState) => state.currencies.homeCurrencies
export const selectedCurrencies = (state: RootState) =>
  state.currencies.selectedCurrencies
export const last_updated_at = (state: RootState) =>
  state.currencies.last_updated_at

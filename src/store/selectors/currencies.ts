import { RootState } from '@/store/types'

export const currencies = (state: RootState) => state.currencies.homeCurrencies
export const selectedCurrencies =
  (currencyShortName: string) => (state: RootState) =>
    state.currencies.selectedCurrencies[currencyShortName]
export const lastUpdatedAt = (state: RootState) =>
  state.currencies.lastUpdatedAt
export const currentStatus = (state: RootState) => state.currencies.status
export const currentSelectedStatus = (state: RootState) =>
  state.currencies.selectedCurrencyStatus

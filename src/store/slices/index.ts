import { combineReducers } from '@reduxjs/toolkit'

import currencySlice from './currencySlice'
import themeSlice from './themeSlice'

export const rootReducer = combineReducers({
  theme: themeSlice,
  currencies: currencySlice,
})

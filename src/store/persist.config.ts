import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { rootReducer } from './slices'

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['someReducer'],
  blacklist: ['themeSlice'],
}
export const persistedReducer = persistReducer(persistConfig, rootReducer)

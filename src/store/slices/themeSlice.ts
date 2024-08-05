import { DARK } from '@/constants'
import { ThemeInitialState } from '@/interfaces/theme'
import { createSlice } from '@reduxjs/toolkit'

const initialState: ThemeInitialState = {
  name: DARK,
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.name = action.payload
    },
  },
})

export default themeSlice.reducer
export const { setTheme } = themeSlice.actions

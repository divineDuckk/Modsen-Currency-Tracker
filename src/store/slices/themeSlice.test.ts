import { DARK, LIGHT } from '@/constants'
import { ThemeInitialState } from '@/interfaces'

import { setTheme } from './themeSlice'
import themeReducer from './themeSlice'

const initialState: ThemeInitialState = {
  name: DARK,
}

describe('test themeSlice', () => {
  it('should change theme', () => {
    const newState = themeReducer(initialState, setTheme(LIGHT))
    expect(newState.name).toEqual(LIGHT)
  })
})

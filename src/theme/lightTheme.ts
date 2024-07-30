import { commonTheme } from './commonTheme'

const lightThemeColors = {
  ...commonTheme.colors,
  borders: '#000',
  buttons: '#000',
  posterBg: '#f5eeff',
  popUpBg: '#f5eeff',
  shadow: '#000',
  gridGraphic: 'rgba(0,0,0,0.9)',
  searchInputBg: '#37f0a3',
}

export const lightTheme = {
  name: 'light',
  body: '#fff',
  hColor: '#000',
  textColor: '#000',
  ...commonTheme,
  colors: lightThemeColors,
}

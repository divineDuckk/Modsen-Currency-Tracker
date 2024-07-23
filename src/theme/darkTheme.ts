import { commonTheme } from './commonTheme'

const darkThemeColors = {
  ...commonTheme.colors,
  borders: '#fff',
  buttons: '#fff',
  posterBg:
    'linear-gradient(225deg, #121212 0%, #24794059 50%, transparent 100%)',
  popUpBg: '#202025',
  shadow: '#fff',
  gridGraphic: 'rgba(255,255,255,0.1)',
}
export const darkTheme = {
  name: 'dark',
  body: '#030304',
  hColor: '#D9D9D9',
  textColor: '#FFFFFF',
  ...commonTheme,
  colors: darkThemeColors,
}

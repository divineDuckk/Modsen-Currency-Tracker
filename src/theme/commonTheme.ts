////////////////////0 , 1, 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10  ,11, 12, 13,
const fontSizes = [12, 16, 18, 20, 24, 25, 26, 28, 30, 32, 33, 35, 76, 90]
//////////////////////0 , 1, 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11,
const lineHeights = [18, 24, 27, 36, 39, 41, 42, 45, 46, 49, 114, 135]
const fontWeights = [300, 400, 500, 600]

const colors = {
  gray: '#D9D9D9',
  cashGray: '#A7B2C3',
  white: '#FFF',
  gradient:
    'linear-gradient(90.18deg, #00CE2C 0.18%, #AEDF23 49.3%, #A3DC00 99.88%)',
  buttonsBg: '#474747',
  posterBg:
    'linear-gradient(225deg, #121212 0%, #24794059 50%, transparent 100%)',
  categoryBorder: '#474747',
  cardBg: '#202025',
  cardBorder: '#474747',
}
const gaps = [17, 26, 30, 64, 100, 115, 184]
const paddings = [25, 29, 30, 45, 58, 96, 121]
//////////////////0 , 1, 2 , 3 , 4 ,  5 , 6 , 7 , 8 , 9 , 10 , 11,
const margins = [16, 20, 29, 30, 32, 39, 45, 50, 57, 87, 96, 121]
const sizes = [30, 50]
const breakPoints = {}

export const commonTheme = {
  fontSizes,
  fontWeights,
  colors,
  paddings,
  gaps,
  margins,
  lineHeights,
  breakPoints,
  sizes,
}

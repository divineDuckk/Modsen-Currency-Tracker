const fontSizes = [12, 16, 18, 20, 24, 25, 26, 28, 30, 32, 33, 35, 76, 90]
const lineHeights = [18, 24, 27, 36, 39, 41, 42, 45, 46, 49, 114, 135]
const fontWeights = [300, 400, 500, 600]

const colors = {
  circleOut: '#02461f',
  circleIn: '#00BC4F',
  gray: '#D9D9D9',
  cashGray: '#A7B2C3',
  white: '#FFF',
  gradient:
    'linear-gradient(90.18deg, #00CE2C 0.18%, #AEDF23 49.3%, #A3DC00 99.88%)',
  buttonsBg: '#474747',
  categoryBorder: '#474747',
  cardBg: '#202025',
  popupWrapperBg: 'rgba(0, 0, 0, 0.5)',
  cardBorder: '#474747',
  candleRed: '#ea3943',
  candleGreen: '#16c781',
  notificationBackground: '#03fc1c',
  black: '#000',
  contactBg: '#8395f2',
}

const tops = ['0px', '50%', '90%']
const lefts = ['0px', '50%']
const rights = ['1%']
const zIndexes = [1]

const gaps = [17, 26, 30, 64, 100, 115, 184]
const paddings = [25, 29, 30, 45, 58, 96, 121]
const margins = [16, 20, 29, 30, 32, 39, 45, 50, 57, 87, 96, 121]
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
  tops,
  lefts,
  zIndexes,
  rights,
}

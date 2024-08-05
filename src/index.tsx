import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'

import { App } from '@/components/App'
import { GlobalStyles, darkTheme, lightTheme } from '@/theme'
import { useAppSelector } from '@/store/hooks'
import { selectThemeName } from '@/store/selectors'
import { LIGHT } from '@/constants'
import { persistor, store } from '@/store'

const MainComponent = () => {
  const theme = useAppSelector(selectThemeName)
  return (
    <ThemeProvider theme={theme === LIGHT ? lightTheme : darkTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainComponent />
      </PersistGate>
    </Provider>
  </BrowserRouter>
)

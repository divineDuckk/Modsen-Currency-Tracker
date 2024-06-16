import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { App } from '@/components/App'
import { GlobalStyles, darkTheme } from '@/theme'

const MainComponent = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<MainComponent />)

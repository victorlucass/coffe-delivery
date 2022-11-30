import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CartContextProvider } from './contexts/CartContext'
import { Router } from './Routes'
import { GlobalStyled } from './style/global'
import { defaultTheme } from './style/theme/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyled />
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

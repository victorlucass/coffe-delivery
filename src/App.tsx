import { ThemeProvider } from 'styled-components'
import { GlobalStyled } from './style/global'
import { defaultTheme } from './style/theme/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyled />
    </ThemeProvider>
  )
}

export default App

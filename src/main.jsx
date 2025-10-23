import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import theme from  './theme.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

    <ThemeProvider theme={theme.lightTheme}>
      <App />
    </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)

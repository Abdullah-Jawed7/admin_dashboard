import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ThemeWrapper from './context/themeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeWrapper>
    <App />
    </ThemeWrapper>
  </StrictMode>,
)

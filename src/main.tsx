import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from './Router.tsx'
import { ScrollProvider } from './ScrollContext.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScrollProvider>
    <Router>
    <App />
    </Router>
    </ScrollProvider>
  </StrictMode>,
)

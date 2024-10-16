import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import { GeneralPage } from './routes/general'
// import { LoginPage } from './routes/login'

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GeneralPage />
  </StrictMode>,
)

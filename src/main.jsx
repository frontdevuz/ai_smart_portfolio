import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <h1>I started my project in Vite + React at 9:56 PM 25/12/2025</h1>
  </StrictMode>,
)

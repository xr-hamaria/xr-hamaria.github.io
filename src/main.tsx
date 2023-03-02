import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ReactGA from 'react-ga4'

ReactGA.initialize('G-7QR39XZN5F')

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

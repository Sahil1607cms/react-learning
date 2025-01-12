import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

//this root is in index.html file 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

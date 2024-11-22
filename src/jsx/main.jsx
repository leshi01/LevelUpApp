import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../css/index.css'
import Background from './background'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Background/>
  </StrictMode>,
)

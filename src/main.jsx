import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { WheaterApp } from './WheaterApp'
import './styles/WheaterApp.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WheaterApp />
  </StrictMode>,
)

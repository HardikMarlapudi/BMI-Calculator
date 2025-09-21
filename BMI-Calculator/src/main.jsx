import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BMICalculator from './BMICalculator.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BMICalculator />
  </StrictMode>
)

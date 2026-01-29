import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from '/Users/vanshikavats/Desktop/react learn/04tailwindprops/components/card.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card username="John Doe" />
    <Card username="Jane Smith" />
  </StrictMode>,
)

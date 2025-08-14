import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Context from './utils/Context.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <Context>

  <BrowserRouter>
  
  <App />

  </BrowserRouter>

  </Context>
)

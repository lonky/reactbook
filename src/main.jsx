import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Clear existing HTML content and add div block
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const Hello = () => <h1>Hello, world</h1>;

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <App />
    <Hello />
  </StrictMode>,
)

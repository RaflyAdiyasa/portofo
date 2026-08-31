import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Set initial theme before React renders to avoid flash
const storedTheme = localStorage.getItem('theme') || 'dark';
if (storedTheme === 'dark') {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.add('light');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
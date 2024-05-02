import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AutoScrollToTop from './utill/AutoScrollToTop.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AutoScrollToTop />
    
    <App />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Preloader from './components/Preloader/Preloader';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Preloader />
    <App />
  </React.StrictMode>,
)

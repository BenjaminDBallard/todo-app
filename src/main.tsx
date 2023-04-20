import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const DATA: any = [];

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import AppState from './state/AppState.tsx';
import './i18n.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppState>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppState>
)

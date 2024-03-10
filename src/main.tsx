import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

//Styles
import './index.css'

//Components
import Cursor from './components/Cursor.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Cursor/>
  </React.StrictMode>,
)

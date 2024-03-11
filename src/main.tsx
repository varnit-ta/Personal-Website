import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

//Styles
import './index.css'

//Components
import Cursor from './components/Cursor.tsx'
import AsteroidBackground from './components/AsteroidBackground.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AsteroidBackground canvasId="asteroid-background" />
    <App />
    <Cursor/>
  </React.StrictMode>,
)

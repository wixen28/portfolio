import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom'; 
// import './index.css'
import App from './App'

import React from 'react'; 
  
const container = document.getElementById('result')
const root = createRoot(container)
root.render(<App tab='home' />)


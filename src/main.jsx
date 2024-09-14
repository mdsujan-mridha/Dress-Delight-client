import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from '../store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <div onContextMenu={(e)=>e.preventDefault()}>
      <App />
      </div>
    </React.StrictMode>
  </Provider>,
)

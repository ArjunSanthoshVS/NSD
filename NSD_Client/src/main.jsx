import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from "@react-oauth/google"

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='289348023911-i9g4cgndmt9baj8jm5qsr52ndatmibk3.apps.googleusercontent.com'>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </BrowserRouter>
  </GoogleOAuthProvider>
)


// "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"

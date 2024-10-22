import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './provider/Authprovider'
import Routes from './routes/Routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider >
      <RouterProvider router={Routes}/>
    </AuthProvider>
  </StrictMode>
)

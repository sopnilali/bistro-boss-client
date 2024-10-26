import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes.jsx'
import Authprovider from './provider/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(

    <Authprovider>
     <QueryClientProvider client={queryClient}>
     <HelmetProvider>
        <RouterProvider router={Routes} />
      </HelmetProvider>
     </QueryClientProvider>
    </Authprovider>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Home from './pages/Home/Home/Home'
import Routes from './routes/Routes'
import { HelmetProvider } from 'react-helmet-async'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout/>,
//     children:[
//       {
//         path: "/",
//         element: <Home/>,
//       }
//     ]
//   },
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={Routes} />
    </HelmetProvider>

  </StrictMode>,
)

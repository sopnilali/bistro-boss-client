import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './provider/Authprovider'


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
  <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={Routes} />
      </HelmetProvider>
  </AuthProvider>
)

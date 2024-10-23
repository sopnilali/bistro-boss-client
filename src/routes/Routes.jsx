import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Menu from "../components/Menu/Menu";
import OrderFood from "../pages/Order/OrderFood/OrderFood";
import Login from "../pages/Login/Login";
import AdminLayout from "../Layout/AdminLayout";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../pages/Secret/Secret";

const Routes = createBrowserRouter([
    {
      element: <MainLayout/>,
      children:[
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "menus",
          element: <Menu/>,
        },
        {
          path: "order",
          element: <OrderFood/>,
        },
        {
          path: "order/:category",
          element: <OrderFood/>,
        },
        {
          path:'secret',
          element: <PrivateRoutes><Secret/></PrivateRoutes>,
        }
      ]
    },
    {
      element: <AdminLayout/>,
      children:[
        {
          path: "login",
          element: <Login/>,
        },
        {
          path:'register',
          element: <Register/>,
        }
      ]
    }
]);

export default Routes
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Menu from "../components/Menu/Menu";
import OrderFood from "../pages/Order/OrderFood/OrderFood";
import Login from "../pages/Login/Login";
import AdminLayout from "../Layout/AdminLayout";
import Register from "../pages/Register/Register";

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
          path: "order/:category",
          element: <OrderFood/>,
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
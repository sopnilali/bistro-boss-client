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
import Cart from "../pages/Dashboard/Cart/Cart";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import ManageBooking from "../pages/Dashboard/ManageBooking/ManageBooking";

const Routes = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "order",
        element: <OrderFood />,
      },
      {
        path: "order/:category",
        element: <OrderFood />,
      },
      {
        path: 'secret',
        element: <PrivateRoutes><Secret /></PrivateRoutes>,
      }
    ]
  },
  // authentication routes start
  {
    path: "login",
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  // authentication routes end
  {
    path: 'dashboard',
    element: <PrivateRoutes><AdminLayout /></PrivateRoutes>,
    children: [
      {
        path: 'cart',
        element: <PrivateRoutes><Cart /></PrivateRoutes>,
      }
      // admin routes start
      ,
      {
        path: 'addItems',
        element: <AddItems/>,
      },
      {
        path: 'manageItem',
        element: <ManageItems/>,
      },
      {
        path: 'manageBooking',
        element: <ManageBooking/>
      },
      {
        path:'allUser',
        element: <AllUsers/>,
      }
      // admin routes end
    ]
  }
]);

export default Routes
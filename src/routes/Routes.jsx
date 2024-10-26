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
import MyBooking from "../pages/Dashboard/MyBooking/MyBooking";
import AddReview from "../pages/Dashboard/AddReview/AddReview";
import Reservation from "../pages/Dashboard/Reservation/Reservation";
import UserDashboard from "../pages/Dashboard/UserDashboard/UserDashboard";
import AdminDashboard from "../pages/Dashboard/AdminDashboard/AdminDashboard";
import AdminRoutes from "./AdminRoutes";

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
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path: 'dashboard',
        element: <AdminRoutes> <AdminDashboard/></AdminRoutes>,
      },
      {
        path: "addItems",
        element: <AdminRoutes><AddItems /></AdminRoutes>,
      },
      {
        path: "manageItem",
        element: <AdminRoutes><ManageItems /></AdminRoutes>,
      },
      {
        path: "manageBooking",
        element: <AdminRoutes><ManageBooking /></AdminRoutes>,
      },
      {
        path: "allUser",
        element: <AdminRoutes><AllUsers /></AdminRoutes>,
      }
    ]
  },
  {
    path: 'user',
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <PrivateRoutes><UserDashboard/></PrivateRoutes>,
      },
      {
        path: 'reservation',
        element: <PrivateRoutes><Reservation /></PrivateRoutes>
      },
      {
        path: "cart",
        element: <PrivateRoutes><Cart /></PrivateRoutes>,
      },
      {
        path: 'booking',
        element: <PrivateRoutes><MyBooking /></PrivateRoutes>,
      },
      {
        path: 'review',
        element: <PrivateRoutes><AddReview /></PrivateRoutes>,
      }
    ]
  },
  // authentication routes end
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  // authentication routes end
]);

export default Routes
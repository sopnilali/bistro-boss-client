import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Menu from "../components/Menu/Menu";
import OrderFood from "../pages/Order/OrderFood/OrderFood";

const Routes = createBrowserRouter([
    {
      path: "/",
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
]);

export default Routes
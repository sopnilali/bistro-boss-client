import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Menu from "../components/Menu/Menu";

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
        }
      ]
    },
]);

export default Routes
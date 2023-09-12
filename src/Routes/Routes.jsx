import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/HomePage/Home/Home";
import Menu from "../pages/MenuPage/Menu/Menu";
import Order from "../pages/OrderingPage/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../pages/DashBoard/MyCart/MyCart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
        path: "order/:category",
        element: <Order />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret />
          </PrivateRoute>
        ),
      },
    ],
  },
  // Dashboard route
  {
    path: "dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "mycart",
        element: <MyCart />,
      },
    ],
  },
]);

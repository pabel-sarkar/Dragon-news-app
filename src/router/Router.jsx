import { createBrowserRouter } from "react-router";

import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Auth from "../Layout/Auth";
import NewsDetails from "../Pages/NewsDetails";
import PrivetRoute from "../provider/PrivetRoute";
import Loading from "../Pages/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
    {
       path: "/categoty/:id",
       loader: () => fetch("/news.json"),
       Component: CategoryNews,
       hydrateFallbackElement: <Loading />
      },
      {
        path: "/signUp",
      },
      {
        path: "/*",
        element: <h2>Error 404</h2>,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth></Auth>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/ragiste",
        element: <SignUp></SignUp>,
      },
    ],
  },
{
  path: "/news-details/:id",
  loader: () => fetch("/news.json"),
  hydrateFallbackElement: <Loading />,
  element: (
    <PrivetRoute>
      <NewsDetails />
    </PrivetRoute>
  )
},
]);

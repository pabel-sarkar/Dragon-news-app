import {
    createBrowserRouter,
  } from "react-router";
import Root from "../Layout/Root";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import SignUp from "../component/SignUp/SignUp";




  export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      children:[
        {   
            index:true,
            path:'/',
            Component:Home,
        },
        {
          path:'login',
          Component:Login,
        },
        {
          path:'signUp',
          Component:SignUp,
        }
      ]
    },
  ]);
  
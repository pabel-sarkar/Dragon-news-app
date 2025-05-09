import {
    createBrowserRouter,
  } from "react-router";



import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";




  export  const router = createBrowserRouter([
    {
      path: "/",
      Component:HomeLayout,
      children:[
        {   
            index:true,
            path:'/',
            Component:Home,
           
        },
        {
          path:'categoty/:id',
          loader:()=>fetch('/public/news.json'),
          Component:CategoryNews,
         
        },
        {
          path:'signUp',
          
        },
        {
          path:'/*',
          element:<h2>Error 404</h2>
        }
      ]
    },
  ]);
  
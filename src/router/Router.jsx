import {
    createBrowserRouter,
  } from "react-router";



import HomeLayout from "../Layout/HomeLayout";




  export  const router = createBrowserRouter([
    {
      path: "/",
      Component:HomeLayout,
      children:[
        {   
            index:true,
            path:'/',
           
        },
        {
          path:'login',
         
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
  
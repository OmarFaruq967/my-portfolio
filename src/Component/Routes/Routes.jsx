// import {
//     createBrowserRouter,
//     RouterProvider,
//   } from "react-router-dom";
// import Home from "../Home/Home";
// import Main from "../Main";


//   export const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Main/>,
//         children:[
//             {
//                 path: "/",
//                 element: <Home/>
//             },
           
//         ]
//     },
//   ]);

import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Main";
import About from "../About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
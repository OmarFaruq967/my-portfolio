import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Component/Routes/Routes";





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-[100%] overflow-x-hidden px-0 md:max-w-[100%] mx-auto">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { Suspense } from 'react';
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  </React.StrictMode>
);

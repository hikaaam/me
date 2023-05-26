import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TODO } from "./Components/Router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/todo",
    element: <TODO />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />,
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { TODO } from "./Components/Router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "todo",
    element: <TODO />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);

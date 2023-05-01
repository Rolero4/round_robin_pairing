import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./index.scss";
import Root from "./components/root/Root";
import Registration from "./components/registration/Registration";
import Pairings from "./components/pairings/Pairings";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Root />,
    element: <Pairings />,
    children: [
      {
        index: true,
        element: <Registration />,
      },
      {
        path: "pairings/",
        element: <Pairings />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

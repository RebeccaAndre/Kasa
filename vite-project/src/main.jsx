import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import AppartementPage from "./pages/AppartementPage";
import Layout from "./miseEnPage/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    // Utilisation de Layout (mise en page) comme élément de route principale
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/flat", element: <AppartementPage /> },
      { path: "/about", element: <h1>A propos</h1> },
    ],
    errorElement: <h1>404 Not Found</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Layout from "./components/Layout"; // Assurez-vous d'importer Layout
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    // Utilisation de Layout (mise en page) comme élément de route principale
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: "/flat", element: <h1>Fiche-logement</h1> },
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

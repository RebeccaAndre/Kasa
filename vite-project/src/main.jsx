// import React from "react";
// import ReactDOM from "react-dom/client";
// import HomePage from "./pages/HomePage";
// import AppartementPage from "./pages/AppartementPage";
// import Layout from "./miseEnPage/Layout";
// import AboutPage from "./pages/AboutPage";
// import ErrorPageNotFound from "./pages/ErrorPageNotFound";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     // Utilisation de Layout (mise en page) comme élément de route principale
//     element: <Layout />,
//     children: [
//       { index: true, element: <HomePage /> },
//       { path: "/flat", element: <AppartementPage /> },
//       { path: "/about", element: <AboutPage /> },
//     ],
//     errorElement: <ErrorPageNotFound />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import AppartementPage from "./pages/AppartementPage";
import Layout from "./miseEnPage/Layout";
import AboutPage from "./pages/AboutPage";
import ErrorPageNotFound from "./pages/ErrorPageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "flat/:id", element: <AppartementPage /> },
      { path: "about", element: <AboutPage /> },
    ],
    errorElement: <ErrorPageNotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

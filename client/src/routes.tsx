import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import Header from "common/Header";
import Footer from "common/Footer";
import NotFound from "pages/error-page";
import FrontendPage from "pages/frontend-page";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/development",
    element: (
      <>
        <Header />
        <FrontendPage />
        <Footer />
      </>
    ),
  },
]);

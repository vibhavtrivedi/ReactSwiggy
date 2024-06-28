import React from "react";
import ReactDOM from "react-dom/client";

import BodyComponent from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import ContactComponent from "./components/ContactUs";
import ErrorComponent from "./components/Error";
import LoginComponent from "./components/Login/Login";
import RegisterComponent from "./components/Register/Register";
import AppComponent from "./components/About/About";
import HeaderComponent from "./components/Header/Header";
import ResturantMenuComponent from "./components/ResturantMenu/ResturantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <BodyComponent />
      },
      {
        path: '/about',
        element: <AppComponent />
      },
      {
        path: '/contact',
        element: <ContactComponent />
      },
      {
        path: '/resturant/:id',
        element: <ResturantMenuComponent />
      },
      {
        path: '/login',
        element: <LoginComponent />
      },
      {
        path: '/register',
        element: <RegisterComponent />
      }
    ],
    errorElement: <ErrorComponent />
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

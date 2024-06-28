import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Components/Header";
import BodyComponent from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AppComponent from "./components/About";
import ContactComponent from "./components/ContactUs";
import ErrorComponent from "./components/Error";
import ResturantMenuComponent from "./components/ResturantMenu";
import LoginComponent from "./components/Login/Login";
import RegisterComponent from "./components/Register/Register";

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

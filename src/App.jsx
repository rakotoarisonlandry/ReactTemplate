import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Login from "./page/Login";
import Register from "./page/Register";
import Homepage from "./components/Homepage";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
function App() {
  // const [count, setCount] = useState(0);
  return (
    <div className="font-poppins">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

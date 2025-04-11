import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function Route() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/get-started",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default Route;

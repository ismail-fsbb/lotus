import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import ErrorPage from "./pages/404.jsx";
import Profile from "./pages/Profile.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import PrivateRoute from "./layout/PrivateRoute.jsx";
import Games from "./pages/Games.jsx";
import GameDetails from "./pages/GameDetails.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <App />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "games",
        element: <Games />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "details/:id",
        element: (
          <PrivateRoute>
            <GameDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`/data.json?id=${params.id}`),
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

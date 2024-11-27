import { AuthLayout } from "@/layout/auth-layout";
import { Layout } from "@/layout/main";
import { UserList } from "@/modules/users/components/list";
import { UserRegistration } from "@/modules/users/components/registration";
import { ForgotPasswordPage } from "@/pages/forgot-password";
import { HomePage } from "@/pages/home";
import { LoginPage } from "@/pages/login";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordPage />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "user-registration",
        element: <UserRegistration />,
      },
      {
        path: "user-list",
        element: <UserList />,
      },
    ],
  },
  {
    path: "*",
    element: <div>404 - Not Found</div>,
  },
]);

import { AuthLayout } from "@/layout/auth-layout";
import { Layout } from "@/layout/main";
import { UserRegistration } from "@/modules/users/components/registration";
import { ForgotPasswordPage } from "@/pages/forgot-password";
import { HomePage } from "@/pages/home";
import { LoginPage } from "@/pages/login";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { QuotationList } from "@/modules/quotations/list";
import { QuotationRegistration } from "@/modules/quotations/registration";
import { UserListConn } from "@/modules/users/components/list-connected";

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
    element: <Layout />,
    children: [
      {
        path: "users",
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "registration",
            element: <UserRegistration />,
          },
          {
            path: "list",
            element: <UserListConn />,
          },
        ],
      },
      {
        path: "quotations",
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "registration",
            element: <QuotationRegistration />,
          },
          {
            path: "list",
            element: <QuotationList />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <div>404 - Not Found</div>,
  },
]);

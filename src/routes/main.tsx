import { AuthLayout } from "@/layout/auth-layout";
import { Layout } from "@/layout/main";
import { UserRegistration } from "@/modules/users/components/registration";
import { ForgotPasswordPage } from "@/pages/forgot-password";
import { HomePage } from "@/pages/home";
import { LoginPage } from "@/pages/login";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { UserListConn } from "@/modules/users/components/list-connected";
import { ProductList } from "@/modules/products/components/List/ProductList";
import { ProductRegistration } from "@/modules/products/components/Registration/ProductRegistration";
import { CustomerList } from "@/modules/customers/components/List/CustomerList";
import { CustomerRegistration } from "@/modules/customers/components/Registration/CustomerRegistration";

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
        ],
      },
      {
        path: "products",
        children: [
          {
            index: true,
            element: <ProductList />,
          },
          {
            path: "registration",
            element: <ProductRegistration />,
          },
          {
            path: "list",
            element: <ProductList />,
          },
        ],
      },
      {
        path: "customers",
        children: [
          {
            index: true,
            element: <CustomerList />,
          },
          {
            path: "registration",
            element: <CustomerRegistration />,
          },
          {
            path: "list",
            element: <CustomerList />,
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

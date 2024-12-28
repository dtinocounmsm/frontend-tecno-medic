import { AuthLayout } from "@/layout/auth-layout";
import { Layout } from "@/layout/main";
import { UserRegistration } from "@/modules/users/components/Registration/registration.tsx";
import { ForgotPasswordPage } from "@/pages/forgot-password";
import { HomePage } from "@/pages/home";
import { LoginPage } from "@/pages/login";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { UserList } from "@/modules/users/components/List/list.tsx";
import { ProductList } from "@/modules/products/components/List/ProductList";
import { ProductRegistration } from "@/modules/products/components/Registration/ProductRegistration";
import { CustomerList } from "@/modules/customers/components/List/CustomerList";
import { CustomerRegistration } from "@/modules/customers/components/Registration/CustomerRegistration";
import { CreateQuotation } from "@/modules/quotations/components/Create/CreateQuotation.tsx";
import { General } from "@/modules/settings/components/General/General.tsx";

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
            element: <UserList />,
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
            path: "create",
            element: <CreateQuotation />,
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
      {
        path: "settings",
        children: [
          {
            index: true,
            element: <General />,
          },
          {
            path: "general",
            element: <General />,
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

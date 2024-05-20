import { createBrowserRouter } from "react-router-dom";
import AdminDashboardLayout from "./components/adminComponents/AdminDashboardLayout";
import DashboardLayout from "./components/myAccount/DashboardLayout";
import RootLayout from "./layouts/RootLayout";
import Auth from "./pages/Auth";
import Cart from "./pages/Cart";
import EditAccount from "./pages/EditAccount";
import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";
import OrderDetails from "./pages/OrderDetails";
import Orders from "./pages/Orders";
import ProductDetailsPage from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";
import AddPersonalization from "./pages/admin/AddPersonalization";
import AddProduct from "./pages/admin/AddProduct";
import AdminHome from "./pages/admin/AdminHome";
import Login from "./pages/admin/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "auth",
        element: <Auth />,
      },
      {
        path: "products/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "my-account",
        element: <DashboardLayout />,
        children: [
          {
            path: "",
            element: <MyAccount />,
          },
          {
            path: "orders",
            element: <Orders />,
          },
          {
            path: "orders/:id",
            element: <OrderDetails />,
          },
          {
            path: "edit-account",
            element: <EditAccount />,
          },
          {
            path: "wishlist",
            element: <Wishlist />,
          },
        ],
      },
      // {
      //   path: "auth",
      //   element: <NonAuth />,
      //   children: [
      //     {
      //       path: "login",
      //       element: <Login />,
      //     },
      //   ],
      // },
    ],
  },
  {
    path: "/admin",
    element: <AdminDashboardLayout />,
    children: [
      {
        path: "",
        element: <AdminHome />,
      },
      {
        path: "products/add-product",
        element: <AddProduct />,
      },
      {
        path: "products/add-product/add-personalization/:id",
        element: <AddPersonalization />,
      },
    ],
  },
  {
    path: "/admin/login",
    element: <Login />,
  },
]);

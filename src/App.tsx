import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import Shop from "./pages/Shop";
import ShopCatogeries from "./pages/ShopCatogeries";
import ProductDetails from "./pages/ProductDetails";
import CartItems from "./pages/CartItems";
import AuthenticationPage from "./pages/AuthenticationPage";
import Footer from "./components/Footer/Footer";

import menBanner from "./assets/banner_mens.png";
import womenBanner from "./assets/banner_women.png";
import kidBanner from "./assets/banner_kids.png";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/errorPage";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/men",
        element: <ShopCatogeries category="men" banner={menBanner} />,
      },
      {
        path: "/women",
        element: <ShopCatogeries category="women" banner={womenBanner} />,
      },
      {
        path: "/kids",
        element: <ShopCatogeries category="kids" banner={kidBanner} />,
      },
      {
        path: "/products",
        element: <ProductDetails />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <CartItems />,
      },
      {
        path: "/auth",
        element: <AuthenticationPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;

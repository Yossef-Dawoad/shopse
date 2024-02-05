import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCatogeries from "./pages/ShopCatogeries";
import ProductDetails from "./pages/ProductDetails";
import CartItems from "./pages/CartItems";
import AuthenticationPage from "./pages/AuthenticationPage";
import Footer from "./components/Footer/Footer";

import menBanner from "./assets/banner_mens.png";
import womenBanner from "./assets/banner_women.png";
import kidBanner from "./assets/banner_kids.png";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Shop />} />
            <Route
              path="/men"
              element={<ShopCatogeries category="men" banner={menBanner} />}
            />
            <Route
              path="/women"
              element={<ShopCatogeries category="women" banner={womenBanner} />}
            />
            <Route
              path="/kids"
              element={<ShopCatogeries category="kids" banner={kidBanner} />}
            />
            <Route path="/products" element={<ProductDetails />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/cart" element={<CartItems />} />
            <Route path="/auth" element={<AuthenticationPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCatogeries from "./pages/ShopCatogeries";
import ProductDetails from "./pages/ProductDetails";
import CartItems from "./pages/CartItems";
import AuthenticationPage from "./pages/AuthenticationPage";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/men" element={<ShopCatogeries category="men" />} />
            <Route
              path="/women"
              element={<ShopCatogeries category="womens" />}
            />
            <Route path="/kids" element={<ShopCatogeries category="kids" />} />
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

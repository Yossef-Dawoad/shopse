import { useParams } from "react-router-dom";
import { useShopContext } from "../context/ShopContext";
import BreadCrums from "../components/BreadCrums/BreadCrums";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import "./styles/ProductDetails.css";

const ProductDetails = () => {
  const { data } = useShopContext();
  const { productId } = useParams();
  const product = data.find((product) => product.id === Number(productId));
  return (
    <div className="product-details">
      <BreadCrums product={product!} />
      <ProductDisplay product={product!} />
    </div>
  );
};

export default ProductDetails;

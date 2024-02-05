import { Link } from "react-router-dom";
import { ItemCardProps } from "../../assets/types/item_type";
import "./ItemCard.css";

const ItemCard = (product: ItemCardProps) => {
  return (
    <div className="item-card-container">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt="" />
      </Link>
      <div className="item-card-description">
        <p>{product.title}</p>
        <div className="item-price">${product.price}</div>
        {product.discount && (
          <div className="item-discount">${product.discount}</div>
        )}
      </div>
    </div>
  );
};

export default ItemCard;

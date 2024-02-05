import "./ProductDisplay.css";
import { ItemCardProps } from "../../assets/types/item_type";
import starIcon from "../../assets/star_icon.png";
import starDullIcon from "../../assets/star_dull_icon.png";

const ProductDisplay = ({ product }: { product: ItemCardProps }) => {
  const starRating = product.rating === undefined ? 0 : product.rating % 5;
  return (
    <div className="productDisplay">
      <div className="productDisplay-left-content">
        <div className="product-images">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-image-main">
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className="productDisplay-right-content">
        <h1>{product.title}</h1>
        <div className="star-rating">
          {[...Array(5)].map((_, index) => {
            if (index < starRating)
              return <img key={index} src={starIcon} alt="" />;
            else return <img key={index} src={starDullIcon} alt="" />;
          })}
          <span>{product.rating}</span>
        </div>
        <div className="product-prices">
          <div className="product-orignal-price">${product.price}</div>
          {product.discount && (
            <div className="product-discount-price">${product.discount}</div>
          )}
        </div>
        <div className="product-description">{product.description}</div>
        <div className="product-sizes">
          <h1 className="size-title">Sizes</h1>
          <div className="size-options">
            <div className="size-option">XS</div>
            <div className="size-option">S</div>
            <div className="size-option">M</div>
            <div className="size-option">L</div>
            <div className="size-option">XL</div>
            <div className="size-option">XXL</div>
          </div>
        </div>
        <button>Add to Cart</button>
        <p className="product-category">
          <span>Category</span> : {product.category}
        </p>
        <p className="product-tags">
          <span>Tags</span> : Modern, Latest, Stylish
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;

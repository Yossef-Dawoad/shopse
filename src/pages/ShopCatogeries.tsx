import ItemCard from "../components/ItemCard/ItemCard";
import dropDownIcon from "../assets/dropdown_icon.png";
import { ItemCardProps } from "../assets/types/item_type";
import { useShopContext } from "../context/ShopContext";
import "./styles/shopCategory.css";

type ShopCatogeriesProps = {
  category: string;
  banner: string;
};

const ShopCatogeries = ({ category, banner }: ShopCatogeriesProps) => {
  const { data } = useShopContext();

  return (
    <div className="shop-category">
      <img className="shop-catgory-banner" src={banner} alt="" />
      <div className="index-sort">
        <p>
          <span>Showing 1-12</span> Out of 36 products
        </p>
        <div className="sort-action">
          Sort by <img src={dropDownIcon} alt="" />
        </div>
      </div>
      <div className="shopCategory-Products">
        {data
          .filter((product) => product.category === category)
          .map((product: ItemCardProps) => (
            <ItemCard key={product.id} {...product} />
          ))}
      </div>
      <div className="load-more">Load More</div>
    </div>
  );
};

export default ShopCatogeries;

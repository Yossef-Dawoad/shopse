import { ItemCardProps } from "../../assets/types/item_type";
import arrowIcon from "../../assets/breadcrum_arrow.png";
import "./BreadCrums.css";

type BreadCrumsProps = {
  product: ItemCardProps;
};

const BreadCrums = ({ product }: BreadCrumsProps) => {
  return (
    <div className="breadcrum">
      Home <img src={arrowIcon} alt="" /> SHOP <img src={arrowIcon} alt="" />
      {product.category} <img src={arrowIcon} alt="" /> {product.title}
    </div>
  );
};

export default BreadCrums;

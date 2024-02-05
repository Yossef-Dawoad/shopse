import { ItemCardProps } from "../../assets/types/item_type";
import "./ItemCard.css";

const ItemCard = (props: ItemCardProps) => {
  return (
    <div className="item-card-container">
      <img src={props.image} alt="" />
      <div className="item-card-description">
        <p>{props.title}</p>
        <div className="item-price">${props.price}</div>
        {props.discount ? (
          <div className="item-discount">${props.discount}</div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ItemCard;

import "./Popular.css";
import data_product from "../../assets/data.ts";
import ItemCard from "../ItemCard/ItemCard.tsx";
const Popular = () => {
  return (
    <div className="popular-container">
      <h1>POPULAR IN WOMEN SECTION</h1>
      <hr />
      <div className="popular-items">
        {data_product.map((product, idx) => (
          <ItemCard key={idx} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Popular;

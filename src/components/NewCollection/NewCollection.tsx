import new_collections from "../../assets/new_collections";
import ItemCard from "../ItemCard/ItemCard";
import "./NewCollection.css";

const NewCollection = () => {
  return (
    <div className="new-collection-container">
      <h1>New Collection</h1>
      <hr />
      <div className="new-collection-items">
        {new_collections.map((collection, idx) => (
          <ItemCard key={idx} {...collection} />
        ))}
      </div>
    </div>
  );
};

export default NewCollection;

import Hero from "../components/Hero/Hero";
import NewCollection from "../components/NewCollection/NewCollection";
import NewLetters from "../components/NewLetters/NewLetters";
import Offers from "../components/Offers/Offers";
import Popular from "../components/Popular/Popular";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewLetters />
    </div>
  );
};

export default Shop;

import "./Offers.css";
import ExclusiveOffers from "../../assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers-container">
      <div className="offer-left-section">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>Only On Best Seller</p>
        <button>Check Now</button>
      </div>
      <div className="offer-right-section">
        <img src={ExclusiveOffers} alt="exclusive offer" />
      </div>
    </div>
  );
};

export default Offers;

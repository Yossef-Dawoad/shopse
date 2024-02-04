import hand_icon from "../../assets/hand_icon.png";
import arrow_icon from "../../assets/arrow.png";
import hero_image from "../../assets/hero_image.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="left-content">
        <h2>New Arrival Only</h2>
        <div>
          <div className="hero-wave-icon">
            <p>New</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Collections</p>
          <p>For every one</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrow icon" />
        </div>
      </div>
      <div className="right-content">
        <img src={hero_image} alt="a stylish girl with stylish clothes" />
      </div>
    </div>
  );
};

export default Hero;

import footerLogo from "../../assets/logo.png";
import instgramLogo from "../../assets/instagram_icon.png";
import pintesterLogo from "../../assets/pintester_icon.png";
import whatsappLogo from "../../assets/whatsapp_icon.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img src={footerLogo} alt="" />
        <p>Shopse</p>
      </div>
      <div className="footer-links">
        <ul>
          <li>Company</li>
          <li>Products</li>
          <li>Offcies</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer-social-icons-container">
        <img src={instgramLogo} alt="instgram Logo" />
        <img src={pintesterLogo} alt="pintester Logo" />
        <img src={whatsappLogo} alt="whatsapp Logo" />
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright © 2021 Shopse. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

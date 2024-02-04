import "./Navbar.css";
import  logo  from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";
import { useState } from "react";

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState('');
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <img src={logo} alt="shopse logo" />
        <p>Shopse</p>
      </div>
      <ul className="nav-items">  
        <li onClick={()=> setActiveMenu('shop')}>Shop{activeMenu==='shop'? <hr/> :<></>}</li>
        <li onClick={()=> setActiveMenu('men')}>Men{activeMenu==='men'? <hr/> :<></>}</li>
        <li onClick={()=> setActiveMenu('women')}>Women{activeMenu==='women'? <hr/> :<></>}</li>
        <li onClick={()=> setActiveMenu('kids')}>Kids{activeMenu==='kids'? <hr/> :<></>}</li>
      </ul>
    <div className="nav-authentication">
        <button>Login</button>
        <img src={cart_icon} alt="shopping cart icon" />
        <div className="cart-item-counter">0</div>
    </div>
    </nav>

  );
};

export default Navbar;

import "./Navbar.css";
import  logo  from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState('');
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <img src={logo} alt="shopse logo" />
        <p>Shopse</p>
      </div>
      <ul className="nav-items">  
        <li onClick={()=> setActiveMenu('shop')}><Link to='/'>Shop</Link>{activeMenu==='shop'? <hr/> :<></>}</li>
        <li onClick={()=> setActiveMenu('men')}><Link to='men'>Men</Link>{activeMenu==='men'? <hr/> :<></>}</li>
        <li onClick={()=> setActiveMenu('women')}><Link to='women' >Women</Link>{activeMenu==='women'? <hr/> :<></>}</li>
        <li onClick={()=> setActiveMenu('kids')}><Link to='kids'>Kids</Link>{activeMenu==='kids'? <hr/> :<></>}</li>
      </ul>
    <div className="nav-authentication">
        <Link to='/auth'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="shopping cart icon" /></Link>
        <div className="cart-item-counter">0</div>
    </div>
    </nav>

  );
};

export default Navbar;

import React, { useState, useContext } from 'react'; // Added useContext
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/shopContext';
function Navbar() {
  const [menu, setMenu] = useState('shop');
  const { getTotalCartItems } = useContext(ShopContext); // Get the count function

  return (
    <div className='navbar'>
      <div className='nav-log'>
        <img src={logo} alt='Logo' />
        <p>SHOPPER</p>
      </div>

      <ul className='nav-menu'>
        <li onClick={() => setMenu('shop')}>
          <Link to='/shop' style={{textDecoration : 'none'}}>Shop</Link>
          {menu === 'shop' && <hr />}
        </li>
        <li onClick={() => setMenu('mens')}>
          <Link to='/mens' style={{textDecoration : 'none'}}>Men</Link>
          {menu === 'mens' && <hr />}
        </li>
        <li onClick={() => setMenu('womens')}>
          <Link to='/womens' style={{textDecoration : 'none'}}>Women</Link>
          {menu === 'womens' && <hr />}
        </li>
        <li onClick={() => setMenu('kids')}>
          <Link to='/kids' style={{textDecoration : 'none'}}>Kids</Link>
          {menu === 'kids' && <hr />}
        </li>
      </ul>

      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <div className='cart-container'>
          <Link to='/cart'><img src={cart_icon} alt='Cart' /></Link>
          {/* Dynamic Cart Count */}
          <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
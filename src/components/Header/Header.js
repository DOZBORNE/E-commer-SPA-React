import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const cart = <FontAwesomeIcon icon={faShoppingCart}/>
  const cartShow = ()=>{
    document.getElementById("cart").style.display="block";
    document.getElementById("product-section").style.opacity= "0.5";
  }
    return (
        <div className="header">
            
            <img src='https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/shopping-online.jpg'>
            </img>
            <button onClick={cartShow}>{cart}</button>
        </div>
    );
};

export default Header;
import React from 'react';
import './CartProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faTimesCircle} from '@fortawesome/free-solid-svg-icons';
const CartProduct = (props) => {

    const {image, title, price,count,cost} = props.product;
    const close = <FontAwesomeIcon icon={faTimesCircle}/>
    return (
        <div className="cart-product">
            <button id="crossItem" onClick={()=>props.handleRemoveItem(props.product)}>{close}</button>
            <div>
                <img src={image} alt="" />    
            </div>
            <div>
                <p>{title}</p>
                <p><small>৳{price} X {count} = ৳{cost}</small></p>
            </div> 
        </div>
      
    );
};

export default CartProduct;
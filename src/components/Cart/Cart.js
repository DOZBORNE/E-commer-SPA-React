import React, { useState } from 'react';
import './Cart.css'
import CartProduct from '../CartProduct/CartProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faClose} from '@fortawesome/free-solid-svg-icons';
const Cart = (props) => {

    const {cart} = props;
   
    const handleRemoveItem=(item)=>{
        props.removeItem(item)
    }
    let total=0;
    for(const product of cart){
        total= total+product.cost;
    }
 
    const close = <FontAwesomeIcon icon={faClose}/>
    const cartClose=()=>{
        document.getElementById("cart").style.display="none"
        document.getElementById("product-section").style.opacity= "1";
    }
    
    const openModal= () =>{
     document.getElementById('myModal').style.display = 'block';

    }

    const closeModal= () =>{
        document.getElementById('myModal').style.display = 'none';
   
       }

    return (
        <div className="cart" id="cart">
            <div id="cartHead">
                <h1><b>CART</b></h1>
                <button id="crossCart" onClick={cartClose}>{close}</button>
            </div>
           
            {
                total.toFixed(2)!== "0.00" ?
                <>
                     <h3><b>Your Items</b></h3>
                    <hr></hr>
                    {
                    cart.map(product => <CartProduct  key={product.id} product={product} handleRemoveItem={handleRemoveItem}></CartProduct>) 
                    }
                    <hr></hr>
                    <h4>Sub-total = ৳{total.toFixed(2)}</h4> 
                    <h4>Delivery Charge = ৳100 </h4> 
                    <hr></hr>
                    <h4><b>Grand-total = ৳{total.toFixed(2)+100}</b></h4> 
                    <button id="checkOutBtn" onClick={openModal}>Proceed To Check Out</button>

                    <div id="myModal" className="modal">
                        <div className="modal-content">
                                <span className="close" onClick={closeModal}>&times;</span>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png'></img>
                                <h2>Dear user, your order has been placed.</h2>
                       </div>

                    </div>
                </>
                :
                <h2>No Items</h2> 
            }
        </div>
    );
};

export default Cart;
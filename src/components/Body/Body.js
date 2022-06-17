import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Body.css'
const Body = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    // DEF NEED THIS array here ^^^ only recall the api ONCE!

    const handleInviteProduct = (product) => {
        if (cart.some(data => data.title === product.title)) {
            product.count++;
            product.cost = product.price * product.count;
            let newCart = cart.filter(data => data.title !== product.title);
            newCart = [...newCart, product];
            setCart(newCart);

        }
        else {

            product.count = 1;
            product.cost = product.price;
            const newCart = [...cart, product];
            setCart(newCart);
        }

    }
    const handleRemoveProduct = (product) => {
        if (cart.some(data => data.title === product.title)) {
            if (product.count === 1) {
                let newCart = cart.filter(data => data.title !== product.title);
                setCart(newCart);
            }
            else {
                product.count--;
                product.cost = product.cost - (product.price * product.count);
                let newCart = cart.filter(data => data.title !== product.title);
                newCart = [...newCart, product];
                setCart(newCart);
            }

        }
    }
    const removeItem = (product) => {
        product.count = 0;
        let newCart = cart.filter(data => data.title !== product.title)
        setCart(newCart);
        document.getElementById("counter").style.display = "none"
        document.getElementById("addToCart").style.display = "block !important";
    }
    return (
        <div className="body" >
            <div className="product-container" id="product-section">
                {
                    products.map(product => <Product key={product.id} product={product} handleInviteProduct={handleInviteProduct} handleRemoveProduct={handleRemoveProduct} ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} removeItem={removeItem}></Cart>
            </div>
        </div>
    );
};

export default Body;
import React, { useState } from 'react';
import { CartContext } from '../../App';
import './Product.css'


const Product = (props) => {
  const { title, price, description, category, image, rating, count } = props.product;
  const [addToCartClincked, setAddToCartClincked] = useState(false);
  const [counts, setcounts] = useState(0);
  const cartState = React.useContext(CartContext)

  //increase countser
  const increase = () => {
    setcounts(counts => counts + 1);
  };
  //decrease countser
  const decrease = () => {
    setcounts(counts => counts - 1);
  };

  return (
    <div className="product">
      <img src={image} alt="" />
      <h3>{title.substring(0, 50)}</h3>
      <h5 className='price'>৳{price}</h5>

      <div className='cardFooter'>
        {
          !addToCartClincked || counts === -1 || props.product.count === 0 ?
            <button className='artBtn' id="addToCart" onClick={() => {
              setAddToCartClincked(true);
              setcounts(0);
            }

            }><strong>Add to Cart</strong></button>

            :
            <>
              <div className='counter' id="counter">
                <button onClick={() => {
                  increase();
                  props.handleInviteProduct(props.product);
                  cartState.setCartState(prevState => prevState + 1)
                }}>+</button>
                <p>{counts}</p>
                <button onClick={() => {
                  decrease();
                  props.handleRemoveProduct(props.product)
                  cartState.setCartState(prevState => prevState < 1 ? 0 : prevState - 1)
                }}>-</button>
              </div>
            </>
        }
      </div>
    </div>
  );
};

export default Product;
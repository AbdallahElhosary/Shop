import React ,{Profiler, useContext} from 'react';
import { Products } from '../../Products'; 
import { ShopContext } from '../../context/ShopContext';
import { CartItem } from './CartItem';
import { useNavigate } from 'react-router-dom';
import "./cart.css";



export const Cart = () => {
  const { cartItems , GetTotalPrice } = useContext(ShopContext);
  const totalPrice = GetTotalPrice();

  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div>
        <h1 className='text-center py-3'>Your Cart Item</h1>
      </div>
      <div  className='cartItems row container justify-content-center'>
        {Products.map(product => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={product.id} /> 
          }
        })}
      </div>
      <div className='checkout mb-3'>
        {totalPrice > 0?
          <>
          <p className='fs-4 fw-bold'>Subtotal : ${ totalPrice}</p>
          <button className='btn btn-dark mx-2' onClick={()=>navigate("/")}>Continue Shopping</button>
          <button className='btn btn-dark'>Checkout</button>
          </>
          : 
          <>
            <p className='text-center fs-2 fw-bold'>Your Card Is Empty</p>
          </>
        } 
      </div>
    </div>
  )
}

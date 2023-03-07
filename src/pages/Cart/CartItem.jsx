import React,{useContext} from 'react'
import "./cart.css";
import { ShopContext } from '../../context/ShopContext';


export const CartItem = (props) => {
    const { cartItems, AddItemToCart, RemoveItemFromCart,UpdateItemAmount  } = useContext(ShopContext);

    return (
        <div className='cartItem mt-3 col-11 col-lg-7 col-md-9 text-center' key={props.data.id}>
            <img src={props.data.productImage} className="catr-img" width="200px" height="200px" alt="images" />  
            <div className='desc'>
                <p><b>{props.data.productName}</b></p>
                <p>${props.data.price}</p>
                <div className='countHandler'>
                    <button className='w-25 rounded-pill' onClick={()=>RemoveItemFromCart(props.data.id)}>-</button>
                    <input value={cartItems[props.data.id]} className="w-25 rounded-pill " onChange={(e)=> UpdateItemAmount(Number(e.target.value) ,props.data.id )}/> 
                    <button className='w-25 rounded-pill' onClick={()=>AddItemToCart(props.data.id)}>+</button>

                </div>
            </div>
        </div>
    )
}

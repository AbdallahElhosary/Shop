import React, { useContext } from 'react';
import { Products } from '../../Products';
import { ShopContext } from '../../context/ShopContext';
import "./shop.css";

export const Shop = () => {
    const { AddItemToCart, cartItems } = useContext(ShopContext);
    return (
        <div className='shop'>
            <div className='shoptitle'>
                <h1 className='fs-1 text-center pt-5 pb-3'>Abdallah Shop</h1>
            </div>
            <div className='products row'>
                {Products.map(product =>(
                    <div className='product col-12 col-md-6 col-lg-4 justify-content-between my-3'  key={product.id}>
                        <img src={product.productImage}  alt="img" className='w-100 h-75 text-center'/> 
                        <div className='description text-center pt-4'>
                            <p className=''><b>{product.productName}</b></p>
                            <p>${ product.price}</p>
                            <button className='addToCartBtn rounded-pill btn btn-outline-dark' onClick={() => AddItemToCart(product.id)}>
                                Add To Cart {cartItems[product.id] > 0 && <>"{cartItems[product.id]}"</>}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

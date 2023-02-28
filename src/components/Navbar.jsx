import React from 'react'
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react"
import "./navbar.css";
export const Navbar = () => {
    return (
        <div className='header'>
            <div className='links text-center'>
                <Link to="/">Shop</Link>
                <Link to="/cart"><ShoppingCart size={32} /></Link>
            </div>
        </div>
    )
}

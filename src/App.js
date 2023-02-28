import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import { Navbar } from "./components/Navbar"
import { ShopContextProvider } from './context/ShopContext'
import { Cart } from './pages/Cart/Cart'
import { Shop } from './pages/shop/Shop'
export default function App() {
    return (
        <div>
            <ShopContextProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Shop />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </Router>
            </ShopContextProvider>
        </div>
    )
}

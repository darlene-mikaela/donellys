import React, { useState, useEffect } from "react";
import CartCards from "../components/CartCards";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";

export default function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedBasket = localStorage.getItem('myBasket');

        const parsedData = JSON.parse(savedBasket);
        setCart(parsedData);
    }, []); // no dependencies

    // calculate price
    const totalPrice = cart.reduce((item) => (item.price * item.quantity), 0);

    if (cart.length === 0) {
        return (
            <>
                <SiteHeader />
                <div className="cart-container">
                    <h1>Checkout</h1>
                    <p>Your basket is empty! Go back to the menu and add some food</p>
                </div>
                <Footer />
            </>
        )
    }

    return (
        <>
            <SiteHeader />
            <div className="cart-container">
                <h1>Checkout</h1>
                {cart.map((item) => (
                    <CartCards key={item.id} item={item} />
                ))}
            </div>
            <Footer />
        </>
    )
}
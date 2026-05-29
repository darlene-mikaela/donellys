import React, { useState, useEffect } from "react";
import CartCards from "../components/CartCards";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";

export default function Cart({ basket, onUpdateQuantity, onDeleteClick }) {
    // calculate price
    const totalPrice = basket ? basket.reduce((item) => (item.price * item.quantity), 0) : 0;

    if (basket) {
        if (basket.length === 0) {
            return (
                <div className="cart-wrapper">
                    <SiteHeader />
                    <div className="cart-container">
                        <h1>Checkout</h1>
                        <p>Your basket is empty! Go back to the menu and add some food</p>
                    </div>
                    <Footer />
                </div>
            )
        }
    }

    return (
        <div className="cart-wrapper">

            <SiteHeader />
            <div className="cart-container">
                <h1>Checkout</h1>
                {basket.map((item) => (
                    <CartCards key={`${item.id}-${item.size}`}
                        item={item}
                        onUpdateQuantity={onUpdateQuantity}
                        onDeleteClick={onDeleteClick} />
                ))}
            </div>
            {/* TO DO: FORM */}
            <Footer />
        </div>
    )
}
import React, { useState, useEffect } from "react";
import CartCards from "../components/CartCards";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";

export default function Cart({ basket, onUpdateQuantity, onDeleteClick, onTrashClick }) {
    const [showAddress, setShowAddress] = useState(false);
    // calculate price
    const totalPrice = basket ? basket.reduce((item) => (item.price * item.quantity), 0) : 0;

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

    return (
        <div className="cart-wrapper">
            <SiteHeader />
            <div className="cart-container">
                <h1>Checkout</h1>
                {basket.map((item) => (
                    <CartCards key={`${item.id}-${item.size}`}
                        item={item}
                        onUpdateQuantity={onUpdateQuantity}
                        onDeleteClick={onDeleteClick}
                        onTrashClick={onTrashClick} />
                ))}
            </div>
            <hr className="summary-divider" />
            <div className="total-row">
                <span>Total amount: </span>
                <span className="grand-total">Rp{totalPrice}</span>
            </div>

            <div className="shipping-form-container">
                <h3>Shipping Details</h3>
                <p>Please fill out your delivery details to complete your order.</p>
                <form>
                    <div className="personal-info">
                        <label htmlFor="sender-name">Full Name</label>
                        <input type="text" name="sender-name" id="sender-name" placeholder="John Doe" required />

                        <label htmlFor="phone-number">Whatsapp/Phone Number</label>
                        <input type="number" name="phone-number" id="phone-number" placeholder="081234567890" required max={999999999999} />
                    </div>

                    <div className="send-method">
                        <p>Delivery method</p>
                        <input type="radio" name="send-method" id="delivery" onClick={()=>setShowAddress(true)}/>
                        <label htmlFor="delivery">Home Delivery</label><br />

                        <input type="radio" name="send-method" id="pickup" onClick={()=>setShowAddress(false)}/>
                        <label htmlFor="pickup">Pick up</label>
                    </div>

                    {showAddress && <>
                        <div className="delivery-address">
                            <label htmlFor="city">City/Region</label>
                            <input type="text" name="city" id="city" required placeholder="Surabaya" />

                            <label htmlFor="full-address">Full Address</label>
                            <textarea name="full-address" id="full-address" rows={4} cols={50} />

                            <label htmlFor="post-code">Postal/Zip Code</label>
                            <input type="text" name="post-code" id="post-code" />
                        </div>
                    </>}

                    <div className="schedule">
                        <label htmlFor="delivery-date">Delivery Date</label>
                        <input type="date" name="delivery-date" id="delivery-date" />

                        <label htmlFor="notes">Special Requests</label>
                        <textarea name="notes" id="notes"></textarea>
                    </div>

                </form>
            </div>
            <Footer />
        </div>
    )
}
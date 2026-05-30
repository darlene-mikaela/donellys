import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import CartCards from "../components/CartCards";
import CheckoutSuccess from "../components/CheckoutSuccess";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";

export default function Cart({ basket, onUpdateQuantity, onDeleteClick, onTrashClick, onConfirmCheckout }) {
    const [showAddress, setShowAddress] = useState(false);
    const [showCheckoutConfirm, setShowCheckoutConfirm] = useState(false);

    const handleCancelCheckout = () => {
        showCheckoutConfirm(false);
    }

    // calculate price
    const totalPrice = basket ? basket.reduce((sum, item) => sum + (item.price * item.quantity), 0) : 0;
    const today = new Date(); // todays date
    today.setDate(today.getDate() + 1);
    const minDate = today.toISOString().split('T')[0];

    if (basket.length === 0) {
        return (
            <div className="cart-wrapper">
                <SiteHeader />
                <div className="cart-empty-container">
                    <h1>Checkout</h1>
                    <p>Your basket is empty! Go back to the menu and add some food</p>
                    <NavLink to="/menu"><button>Explore Our Menu</button></NavLink>
                </div>
                <Footer />
            </div>
        )
    }

    return (
        <div className="cart-wrapper">
            <SiteHeader />
            <h1>Checkout</h1>
            <div className="cart-container">
                <div className="cart-item-container">
                    {basket.map((item) => (
                        <CartCards key={`${item.id}-${item.size}`}
                            item={item}
                            onUpdateQuantity={onUpdateQuantity}
                            onDeleteClick={onDeleteClick}
                            onTrashClick={onTrashClick} />
                    ))}
                    <div className="total-row">
                        <span className="grand-total">Total amount: Rp{totalPrice.toLocaleString()}</span>
                        <p>* Does not include shipping fees.</p>
                    </div>
                </div>

                <div className="shipping-form-container">
                    <div className="shipping-title">
                        <h3>Shipping Details</h3>
                        <p>Please fill out your delivery details to complete your order.</p>
                    </div>
                    <form>
                        <h4>Personal Info</h4>
                        <div className="personal-info">
                            <div className="sender-name-container">
                                <label htmlFor="sender-name">Sender's Full Name</label>
                                <input type="text" name="sender-name" id="sender-name" placeholder="John Doe" required /><br />
                            </div>

                            <div className="phone-number-container">
                                <label htmlFor="phone-number">Whatsapp/Phone Number</label>
                                <input type="text" name="phone-number" id="phone-number"
                                    placeholder="081234567890" required inputMode="numeric"
                                    pattern="0[0-9]{10,13}" />
                            </div>
                        </div>

                        <h4>Delivery Method</h4>
                        <div className="send-method">
                            <div className="container">
                                <input type="radio" name="send-method" id="delivery" onClick={() => setShowAddress(true)} />
                                <label htmlFor="delivery">Home Delivery</label>
                            </div>
                            <div className="container">
                                <input type="radio" name="send-method" id="pickup" onClick={() => setShowAddress(false)} defaultChecked />
                                <label htmlFor="pickup">Pick up</label>
                            </div>
                        </div>

                        {showAddress && <>
                            <div className="delivery-address">
                                <div className="container">
                                    <label htmlFor="city">City/Region</label>
                                    <input type="text" name="city" id="city" required placeholder="Surabaya" />
                                </div>

                                <div className="container">
                                    <label htmlFor="full-address">Full Address</label>
                                    <textarea name="full-address" id="full-address" rows={4} cols={30} required />
                                </div>

                                <div className="container">
                                    <label htmlFor="post-code">Postal/Zip Code</label>
                                    <input type="number" name="post-code" id="post-code" required inputMode="numeric"
                                        pattern="[0-9]{5}" />
                                </div>
                            </div>
                        </>}

                        <h4>Delivery/Pick up Date and Additional Notes</h4>
                        <div className="schedule">
                            <div className="container">
                                <label htmlFor="delivery-date">Delivery Date</label>
                                <input type="date" name="delivery-date" id="delivery-date" min={minDate} required />
                            </div>

                            <div className="container">
                                <label htmlFor="pickup-time">Pickup/Deliver Time</label>
                                <input type="time" name="time" id="pickup-time" required />
                            </div>

                            <div className="container">
                                <label htmlFor="notes">Special Requests</label>
                                <textarea name="notes" id="notes" rows={4} cols={30}
                                    placeholder="A Christmas card; put the order on the fence; etc."></textarea>
                            </div>
                        </div>

                        <div className="submit-btn">
                            <button type="button" name="submit" onClick={(e) => {
                                e.preventDefault();
                                setShowCheckoutConfirm(true);
                            }}>Finish my order!</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />

            {showCheckoutConfirm && <CheckoutSuccess
                onConfirmCheckout={onConfirmCheckout}
                onCancelCheckout={() => {
                    setShowCheckoutConfirm(false);
                }}
                checkoutBasket={basket}
                totalPrice={totalPrice} />}
        </div>
    )
}
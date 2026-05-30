import { useState } from "react"
import { NavLink } from "react-router";

export default function CheckoutSuccess({ onCancelCheckout, onConfirmCheckout, checkoutBasket, totalPrice }) {
    const [isFinalSuccess, setIsFinalSuccess] = useState(false);

    const handleFinalConfirm = () => {
        setIsFinalSuccess(true);
    }

    return (
        <div className="checkout-success-overlay">
            {isFinalSuccess ?
                <div className="checkout-success-content">
                    <div className="success-overlay">
                        <div className="big-check">&#x2714;</div>
                        <h2>Placed Your Order Successfully!</h2>
                        <p>Thank you for ordering. Please wait for us to confirm your order.</p>
                        <NavLink to="/"><button name="to-home">Back to Home</button></NavLink>
                    </div>
                </div> : <div className="checkout-success-content">
                    <h2>Confirm Your Order</h2>
                    <div className="recap-items-list">
                        {checkoutBasket.map((item, index) => (
                            <div key={index} className="recap-item-row">
                                <span>{item.title}x{item.quantity} Rp{(item.price * item.quantity).toLocaleString()}</span>
                            </div>
                        ))}
                    </div>
                    <div className="options">
                        <button className="no" onClick={onCancelCheckout}>Modify Order</button>
                        <button className="yes" onClick={() => {
                            setIsFinalSuccess(true);
                        }}>Confirm Order</button>
                    </div>
                </div>
            }
        </div>
    )
}
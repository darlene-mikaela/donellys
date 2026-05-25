import React from "react";

export default function CartCards({ item }) {
    return (
        <div className="cart-card">
            <div className="img-container-cart">
                <img src={item.image} alt={item.title} />
            </div>
            <div className="cart-item-details">
                <h3>{item.title} ({item.size})</h3>
                <p>Qty: {item.quantity} (@Rp{item.price})</p>
                <p>Rp{(item.quantity * item.price).toLocaleString()}</p>
            </div>
        </div>
    )
}
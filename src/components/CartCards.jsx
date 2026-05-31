import React, { useState } from "react";

export default function CartCards({ item, onUpdateQuantity, onDeleteClick, onTrashClick }) {
    return (
        <div className="cart-card">
            <div className="cart-main-info">
                <div className="img-container-cart">
                    <img src={item.image} alt={item.title} />
                </div>
                <div className="cart-item-details">
                    <h3>{item.title} ({item.size})</h3>
                    <p>Qty: {item.quantity} (@Rp{item.price.toLocaleString()})</p>
                    <p>Rp{(item.quantity * item.price).toLocaleString()}</p>
                </div>
            </div>
            <div className="cart-actions">
                <div className="counter-container">
                    <button onClick={() => onUpdateQuantity(item.id, item.size, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, item.size, 1)}>+</button>
                </div>
                <i className="fa fa-trash" aria-hidden="true" onClick={() => onTrashClick(item.id, item.size, item)}></i>
            </div>
        </div>
    )
}
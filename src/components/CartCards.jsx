import React, { useState } from "react";

export default function CartCards({ item, onAddToBasket }) {
    const [quantity, setQuantity] = useState(item.quantity); // start at item quantity

    const increment = () => setQuantity(prev => prev + 1);
    const decrement = () => setQuantity(prev => (prev === 1 ? prev : prev - 1));
    const handleAddClick = () => {
        const orderItem = {
            id: item.id,
            title: item.title,
            summary: item.summary,
            image: item.image,
            size: selectedSize.name,
            price: selectedSize.price,
            quantity: quantity
        }
        addToBasket(orderItem);
    }

    return (
        <div className="cart-card">
            <div className="img-container-cart">
                <img src={item.image} alt={item.title} />
            </div>
            <div className="cart-item-details">
                <h3>{item.title} ({item.size})</h3>
                <p>Qty: {item.quantity} (@Rp{item.price.toLocaleString()})</p>
                <p>Rp{(item.quantity * item.price).toLocaleString()}</p>
            </div>
            <div className="cart-actions">
                <div className="counter-container">
                    <button onClick={decrement}>-</button>
                    <span>{quantity}</span>
                    <button onClick={increment}>+</button>
                </div>
                <i className="fa fa-trash" aria-hidden="true"></i>
            </div>
        </div>
    )
}
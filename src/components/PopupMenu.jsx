import React, { useState } from "react";
import { menu } from "../data/menu";

export default function PopupMenu({ item, onClose, addToBasket }) {
    const [selectedSize, setSelectedSize] = useState(item.sizes[0]); // default to first size
    const [quantity, setQuantity] = useState(1); // start at 1
    const [success, setSuccess] = useState(false);

    const handleSizeChange = (e) => {
        // console.log(`e.target.value: ${e.target.value}`);
        const chosenSize = item.sizes.find(s => s.name === e.target.value);
        // console.log(`Match ${chosenSize}`);
        setSelectedSize(chosenSize);
    }

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
        setSuccess(true);

        setTimeout(() => {
            setSuccess(false); // set false again for the next item then close
            onClose();
        }, 1500);
    }

    return (
        <div className="popup-overlay">
            {/* stopPropagation to prevent unwanted closes */}
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                {success ? (
                    <div className="success-overlay">
                        <div className="big-check">&#x2714;</div>
                        <h2>Added {item.title} to basket!</h2>
                    </div>
                ) : (
                    <>
                        <button className="close-popup-btn" onClick={onClose}>&#x2716;</button>
                        <div className="img-container-popup">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <h2>{item.title}</h2>
                        <p>{item.summary}</p>

                        <div className="price-tag">
                            <p className="price">Rp{selectedSize.price.toLocaleString()}</p>
                            <p className="size">{selectedSize.desc}</p>
                        </div>

                        <div className="controls">
                            <select className="select-size"
                                value={selectedSize.name}
                                onChange={handleSizeChange}
                                name="size">
                                {item.sizes.map((size) => (
                                    <option key={size.name} value={size.name}>
                                        {size.name}
                                    </option>
                                ))}
                            </select>

                            <div className="counter-container">
                                <button onClick={decrement}>-</button>
                                <span>{quantity}</span>
                                <button onClick={increment}>+</button>
                            </div>

                            <button className="add-btn" onClick={handleAddClick}>Add to Basket</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
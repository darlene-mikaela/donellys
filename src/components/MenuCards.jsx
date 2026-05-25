import React, { useState } from "react";
import { menu } from "../data/menu";

export default function MenuCards({ item, onCardClick }) {
    return (<>
        <article className="card" key={item.id} onClick={() => onCardClick(item)}>
            <div className="img-container-card">
                <img src={item.image} alt={item.title} />
            </div>
            <h2>{item.title}</h2>
            <p>{item.summary}</p>
            <p className="price-tag">Rp{item.sizes[0].price.toLocaleString()}</p>
            <span className="view-details-tag">Click to View Options</span>
        </article>
    </>)
}
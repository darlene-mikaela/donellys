import { Link } from "react-router";
import React, { useState } from "react";
import { menu } from "../data/menu.js";
import MenuCards from "../components/MenuCards.jsx";
import SiteHeader from "../components/SiteHeader.jsx";
import Footer from "../components/Footer.jsx";
import PopupMenu from "../components/PopupMenu.jsx";

export default function Menus({ onAddToBasket }) {
    const [activeItem, setActiveItem] = useState(null);
    return (<>
        <SiteHeader />
        <section>
            <h1>Our Menu</h1>
            <div className="list">
                {/* pass each item into each card */}
                {menu.map((item) => (
                    <MenuCards key={item.id} item={item} onCardClick={(clickedItem) => setActiveItem(clickedItem)} />
                ))}
            </div>
        </section>
        <Footer />

        {/* render popup */}
        {activeItem && (
            <PopupMenu
                item={activeItem}
                onClose={() => setActiveItem(null)} // clear state to close
                addToBasket={onAddToBasket}
            />
        )}
    </>);
}
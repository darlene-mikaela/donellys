import { Route, Routes } from "react-router";
import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Menus from "./pages/Menus";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

export default function App() {
  const [basket, setBasket] = useState(() => {
    const savedBasket = localStorage.getItem("myBasket");
    return savedBasket ? JSON.parse(savedBasket) : [];
  });

  useEffect(() => {
    localStorage.setItem("myBasket", JSON.stringify(basket));
  }, [basket]);

  const addBasket = (newItem) => {
    setBasket((prevBasket) => {
      // check if the specific item is already in basket
      const existingItemIndex = prevBasket.findIndex((item) => item.id === newItem.id && item.size === newItem.size);
      
      if (existingItemIndex > -1) {
        // if already exist, update item
        const updatedBasket = [...prevBasket]; // spread array
        updatedBasket[existingItemIndex].quantity += newItem.quantity;
        return updatedBasket;
      } else {
        return [...prevBasket, newItem]; // add new item
      }
    })
  }

  return (<>
    <main className="page">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menus onAddToBasket={addBasket}/>}></Route>
        <Route path="/cart" element={<Cart item={basket} onAddToBasket={addBasket}/>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </main>
    </>)
}
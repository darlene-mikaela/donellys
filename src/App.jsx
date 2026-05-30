import { Route, Routes, useNavigate } from "react-router";
import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Menus from "./pages/Menus";
import Cart from "./pages/Cart";
import Alert from "./components/Alert";
import NotFound from "./pages/NotFound";

export default function App() {
  const [basket, setBasket] = useState(() => {
    const savedBasket = localStorage.getItem("myBasket");
    return savedBasket ? JSON.parse(savedBasket) : [];
  });
  const [itemToDelete, setItemToDelete] = useState(null);
  const navigate = useNavigate();
  
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

  const updateQuantity = (id, size, amount) => {
    setBasket((prevBasket) => {
      return prevBasket.flatMap((item) => {
        if (item.id == id && item.size == size) {
          const newAmount = item.quantity + amount;

          if (newAmount < 1) {
            setItemToDelete({ id, size, title: item.title });
            return [item];
          }
          return [{ ...item, quantity: newAmount }];
        }
        return [item];
      })
    })
  }

  const executeDelete = () => {
    if (itemToDelete) {
      setBasket((prevBasket) => {
        return prevBasket.filter(item => !(item.id === itemToDelete.id && item.size === itemToDelete.size));
      })
      setItemToDelete(null);
    }
  }

  const directDelete = (id, size, item) => {
    const targetItem = basket.find(item => item.id === id && item.size === size);
    if (targetItem) setItemToDelete({ id, size, title: item.title });
  }

  const handleConfirmCheckout = () => {
    setBasket([]);
    navigate("/");
  }

  return (<>
    <main className="page">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menus onAddToBasket={addBasket} />}></Route>
        <Route path="/cart" element={<Cart basket={basket}
          onUpdateQuantity={updateQuantity}
          onDeleteClick={executeDelete}
          onTrashClick={directDelete}
          onConfirmCheckout={handleConfirmCheckout} />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      {itemToDelete !== null && (
        <Alert
          onClose={() => setItemToDelete(null)}
          confirmDelete={executeDelete}
        />
      )}
    </main>
  </>)
}
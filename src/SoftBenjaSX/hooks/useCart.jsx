import { useState } from "react";
import { useSelector } from "react-redux";

export const useCart = () => {
  
  const { platillos } = useSelector((state) => state.menu);


  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  

  const addToCart = (platilloToAdd) => {
    const existingIndex = cart.findIndex(
      (item) => item.nombre === platilloToAdd.nombre
    );
    let newCart;
    let newTotal = total;

    if (existingIndex !== -1) {
      // Si el platillo ya está en el carrito, incrementa su cantidad
      newCart = cart.map((item, idx) =>
        idx === existingIndex
          ? { ...item, cantidad: item.cantidad + 1 } // Incrementa la cantidad en 1
          : item
      );
      newTotal += platilloToAdd.precio; // Suma solo el precio de un platillo más
    } else {
      // Si el platillo no está en el carrito, agrégalo con cantidad 1
      newCart = [...cart, { ...platilloToAdd, cantidad: 1 }];
      newTotal += platilloToAdd.precio; // Suma el precio del nuevo platillo
    }

    setCart(newCart);
    setTotal(newTotal);
  };

  const removeFromCart = (platilloToRemove) => {
    const existingItem = cart.find(
      (item) => item.nombre === platilloToRemove.nombre
    );

    if (!existingItem) return; // No hacer nada si el platillo no está en el carrito

    let newCart;
    let newTotal = total;

    if (existingItem.cantidad > 1) {
      // Si hay más de una unidad, decrementa la cantidad
      newCart = cart.map((item) =>
        item.nombre === platilloToRemove.nombre
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      );
      newTotal -= platilloToRemove.precio;
    } else {
      // Si solo hay una unidad, quita el platillo del carrito
      newCart = cart.filter((item) => item.nombre !== platilloToRemove.nombre);
      newTotal -= platilloToRemove.precio;
    }

    setCart(newCart);
    setTotal(newTotal);
  };

  return {
    cart,
    setCart,
    setTotal,
    total,
    addToCart,
    removeFromCart,
  };
};

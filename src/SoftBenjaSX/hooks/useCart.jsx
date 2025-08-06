import { useState } from "react";

export const platillos = [
  // Platillos
  {
    nombre: "Tacos al Pastor",
    descripcion: "Tortillas de maíz rellenas de cerdo adobado, piña y cebolla.",
    precio: 45,
    urlImagen: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    categoria: "Platillos",
    disponible: true,
  },
  {
    nombre: "Pizza Margarita",
    descripcion: "Pizza clásica con salsa de tomate, mozzarella y albahaca.",
    precio: 120,
    urlImagen: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    categoria: "Platillos",
    disponible: true,
  },
  {
    nombre: "Sushi Roll",
    descripcion: "Rollos de arroz rellenos de salmón, aguacate y pepino.",
    precio: 90,
    urlImagen: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    categoria: "Platillos",
    disponible: true,
  },
  {
    nombre: "Hamburguesa Clásica",
    descripcion: "Carne de res, lechuga, tomate, queso y pan artesanal.",
    precio: 80,
    urlImagen: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    categoria: "Platillos",
    disponible: true,
  },
  {
    nombre: "Pad Thai",
    descripcion: "Fideos de arroz salteados con camarones, huevo y cacahuate.",
    precio: 110,
    urlImagen: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    categoria: "Platillos",
    disponible: true,
  },
  // Bebidas
  {
    nombre: "Agua de Horchata",
    descripcion: "Bebida refrescante de arroz con canela y azúcar.",
    precio: 25,
    urlImagen: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc",
    categoria: "Bebidas",
    disponible: true,
  },
  {
    nombre: "Coca Cola",
    descripcion: "Refresco clásico de cola.",
    precio: 20,
    urlImagen: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c",
    categoria: "Bebidas",
    disponible: true,
  },
  {
    nombre: "Jugo de Naranja",
    descripcion: "Jugo natural de naranja recién exprimido.",
    precio: 30,
    urlImagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
    categoria: "Bebidas",
    disponible: true,
  },
  // Postres
  {
    nombre: "Pastel de Chocolate",
    descripcion: "Pastel esponjoso de chocolate con cobertura cremosa.",
    precio: 50,
    urlImagen:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?fit=crop&w=600&q=80",
    categoria: "Postres",
    disponible: true,
  },
  {
    nombre: "Helado de Vainilla",
    descripcion: "Helado cremoso de vainilla.",
    precio: 35,
    urlImagen: "https://images.unsplash.com/photo-1505250469679-203ad9ced0cb",
    categoria: "Postres",
    disponible: true,
  },
  {
    nombre: "Flan Napolitano",
    descripcion: "Postre tradicional de huevo y caramelo.",
    precio: 40,
    urlImagen:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?fit=crop&w=600&q=80",
    categoria: "Postres",
    disponible: true,
  },
];

let menuListByCategory = platillos.filter((platillo) => platillo.categoria === 'Platillos');

export const useCart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [menuList, setMenuList] = useState(menuListByCategory);

  const menuSelecter = (e) => {
    console.log(
      platillos.filter((platillo) => platillo.categoria === e.target.innerText)
    );
    // Aquí podrías implementar la lógica para filtrar los platillos según la categoría seleccionada
    setMenuList(
      platillos.filter((platillo) => platillo.categoria === e.target.innerText)
    );
  };

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
    menuSelecter,
    menuList,
  };
};

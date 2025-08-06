import React from "react";

export const CartItem = ({ platillo, removeFromCart }) => {
  return (
    <li className="flex justify-between items-center border-b border-blue-100 py-2">
      <div>
        <span className="font-semibold text-xl">{platillo.cantidad}</span>
        <span className="font-semibold text-xl ml-4">{platillo.nombre}</span>
      </div>
      <span className="text-sm">c/u ${platillo.precio}</span>

      <div className="flex items-center gap-2">
        <span className="text-gray-700">
          ${(platillo.precio * platillo.cantidad).toFixed(2)}
        </span>
        {/* Botón para quitar un elemento */}
        <button
          onClick={() => removeFromCart(platillo)}
          className="font-semibold cursor-pointer size-8 text-center text-white text-xl bg-red-500 rounded-full flex items-center justify-center"
        >
          &minus;
        </button>
      </div>
    </li>
  );
};

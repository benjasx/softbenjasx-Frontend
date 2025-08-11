import { useEffect, useState, useMemo } from "react";
import { usePlatilloStore } from "../../hooks/usePlatillos";
import { MenuItem, CartItem } from "../components";
import { useCart } from "../hooks";

export const AddSale = () => {
  const { cart, total, addToCart, removeFromCart, setCart, setTotal } =
    useCart();

  const { startLoadingMenu, platillos } = usePlatilloStore();
  const [selectedCategory, setSelectedCategory] = useState("Platillos");

  useEffect(() => {
    startLoadingMenu();
  }, []);

  const menuList = useMemo(() => {
    return platillos.filter(
      (platillo) => platillo.categoria === selectedCategory
    );
  }, [platillos, selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="max-w-[1200px] mx-auto mt-30 mb-10 p-8 shadow-2xl rounded-2xl border border-blue-100">
      <h1 className="text-2xl font-extrabold mb-8 text-blue-700 text-center w-full">
        Generar una venta
      </h1>
      <div className="flex mt-10 justify-between gap-16">
        <div className="w-2/3">
          <h2 className="text-2xl text-center font-bold mb-4">Menú</h2>
          <div className="flex m-4 gap-3">
            <button
              className="bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200 cursor-pointer"
              onClick={() => handleCategoryClick("Platillos")}
            >
              Platillos
            </button>
            <button
              className="bg-blue-500 text-white text-sm  font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200 cursor-pointer"
              onClick={() => handleCategoryClick("Bebidas")}
            >
              Bebidas
            </button>
            <button
              className="bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200 cursor-pointer"
              onClick={() => handleCategoryClick("Postres")}
            >
              Postres
            </button>
          </div>
          <ul>
            {menuList.map((platillo) => (
              <MenuItem
                key={platillo._id}
                platillo={platillo}
                addToCart={addToCart}
              />
            ))}
          </ul>
        </div>
        <div className="w-1/2 bg-white p-8 rounded-xl shadow-lg max-w-[550px] text-gray-800 font-mono">
          <h2 className="text-2xl text-center font-bold mb-10">Pedido</h2>
          <span className="text-gray-500 block text-end">
            {"Mi Restaurant"}
          </span>
          <span className="text-gray-500 block text-end ">
            {new Date().toLocaleString()}
          </span>
          <span className="text-gray-500 block text-end">Cajero {"Benja"}</span>
          <ul className="space-y-4 mt-10">
            {cart.map((platillo, index) => (
              <CartItem
                key={index}
                platillo={platillo}
                removeFromCart={removeFromCart}
              />
            ))}
          </ul>
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center mt-60">
              No hay platillos en el carrito
            </p>
          ) : (
            <div className="border-t border-blue-100 mt-20 pt-4">
              <h3 className=" font-bold">Total: ${total.toFixed(2)}</h3>
              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => {
                  if (cart.length > 0) {
                    alert(
                      `Venta generada con éxito! Total: $${total.toFixed(2)}`
                    );
                    console.log("Venta generada:", cart, total);

                    setCart([]); // Vaciar el carrito
                    setTotal(0); // Reiniciar el total
                  } else {
                    alert(
                      "El carrito está vacío. Agrega platillos antes de confirmar la venta."
                    );
                  }
                }}
              >
                Confirmar Venta
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import { MenuItem } from "../components";
import { useCart } from "../hooks";

export const Menu = () => {
  const { menuList, menuSelecter } = useCart();
  console.log("Menu List:", menuList);

  return (
    <div className="max-w-[1500px] mx-auto mt-60 mb-10 p-8 shadow-2xl rounded-2xl border border-blue-100">
      <div className="flex m-4 gap-3">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600"
          onClick={menuSelecter}
        >
          Platillos
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600"
          onClick={menuSelecter}
        >
          Bebidas
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600"
          onClick={menuSelecter}
        >
          Postres
        </button>
      </div>

      <ul>
        {menuList.map((platillo) => (
          <MenuItem
            key={platillo.nombre}
            platillo={platillo}
          />
        ))}
      </ul>
    </div>
  );
};

import { useMemo, useState } from "react";
import { usePlatilloStore } from "../../hooks/usePlatillos";
import { MenuItemList } from "../components";

export const Menu = () => {
  const { platillos } = usePlatilloStore();
  const [selectedCategory, setSelectedCategory] = useState("Platillos");

  const menuList = useMemo(() => {
    return platillos.filter(
      (platillo) => platillo.categoria === selectedCategory
    );
  }, [platillos, selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="max-w-[1500px] mx-auto mt-30 mb-10 p-8 shadow-2xl rounded-2xl border border-blue-100">
      <div className="flex m-4 gap-3">
        <button
          className="bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200 cursor-pointer"
          onClick={() => handleCategoryClick("Platillos")}
        >
          Platillos
        </button>
        <button
          className="bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200 cursor-pointer"
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
          <MenuItemList key={platillo.nombre} platillo={platillo} />
        ))}
      </ul>
    </div>
  );
};

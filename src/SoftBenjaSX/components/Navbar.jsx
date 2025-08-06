import { BiLogOut } from "react-icons/bi";
import { FaCashRegister, FaUserNinja } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { MdRestaurantMenu, MdShoppingCart } from "react-icons/md";
import { NavLink } from "react-router";

const iconClass = "text-6xl transition-colors";

export const Navbar = () => {
  return (
    <div className="w-full bg-gray-800 text-white shadow-2xl fixed top-0 left-0 z-50 ">
      <nav className="flex max-w-7xl mx-auto p-5 justify-center gap-5">
        <NavLink
          to="/soft-benjasx/add-user"
          className="flex flex-col w-[168px] items-center border p-5 cursor-pointer hover:bg-gray-700 transition-colors rounded-2xl"
        >
          {({ isActive }) => (
            <>
              <FaUserNinja className={`${iconClass} ${isActive ? "text-orange-500" : ""}`} />
              <span className="text-lg mt-2">Añadir Usuario</span>
            </>
          )}
        </NavLink>
        <NavLink
          to="/soft-benjasx/add-menu"
          className="flex flex-col w-[168px] items-center border p-5 cursor-pointer hover:bg-gray-700 transition-colors rounded-2xl"
        >
          {({ isActive }) => (
            <>
              <MdRestaurantMenu className={`${iconClass} ${isActive ? "text-orange-500" : ""}`} />
              <span className="text-lg mt-2">Agregar Platillo</span>
            </>
          )}
        </NavLink>
        <NavLink
          to="/soft-benjasx/add-sale"
          className="flex flex-col w-[168px] items-center border p-5 cursor-pointer hover:bg-gray-700 transition-colors rounded-2xl"
        >
          {({ isActive }) => (
            <>
              <MdShoppingCart className={`${iconClass} ${isActive ? "text-orange-500" : ""}`} />
              <span className="text-lg mt-2">Generar Venta</span>
            </>
          )}
        </NavLink>
        <NavLink
          to="/soft-benjasx/view-menu"
          className="flex flex-col w-[168px] items-center border p-5 cursor-pointer hover:bg-gray-700 transition-colors rounded-2xl"
        >
          {({ isActive }) => (
            <>
              <IoFastFood className={`${iconClass} ${isActive ? "text-orange-500" : ""}`} />
              <span className="text-lg mt-2">Ver Menú</span>
            </>
          )}
        </NavLink>
        <NavLink
          to="/soft-benjasx/view-sales"
          className="flex flex-col w-[168px] items-center border p-5 cursor-pointer hover:bg-gray-700 transition-colors rounded-2xl"
        >
          {({ isActive }) => (
            <>
              <FaCashRegister className={`${iconClass} ${isActive ? "text-orange-500" : ""}`} />
              <span className="text-lg mt-2">Ver Ventas</span>
            </>
          )}
        </NavLink>
        <NavLink
          to="/soft-benjasx/view-sales"
          className="flex flex-col w-[168px] items-center border p-5 cursor-pointer hover:bg-gray-700 transition-colors rounded-2xl"
        >
          {({ isActive }) => (
            <>
              <BiLogOut className={`${iconClass} ${isActive ? "text-orange-500" : ""}`} />
              <span className="text-lg mt-2">Cerrar Sesión</span>
            </>
          )}
        </NavLink>
      </nav>
      <div className="size-25 bg-gray-800 rounded-full fixed left-1/2 top-30 -translate-x-1/2 -z-10 shadow-2xl"></div>
    </div>
  );
};

import { BiLogOut } from "react-icons/bi";
import { FaCashRegister, FaUserNinja } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { MdRestaurantMenu, MdShoppingCart } from "react-icons/md";
import { NavLink } from "react-router";
import { useAuthStore } from "../../hooks/useAuthStore";

const iconClass = "text-3xl transition-colors";

export const Navbar = () => {
  const { starLogout, user } = useAuthStore();

  return (
    <div className="w-full bg-gray-800 text-white shadow-2xl fixed top-0 left-0 z-50">
      {/* <span className="m-5 text-center text-xl block">Usuario: {user.name}</span> */}
      <nav className="flex max-w-7xl mx-auto p-3 justify-center gap-3">
        {user.role === "ADMIN" && (
          <>
            <NavLink
              to="/soft-benjasx/add-user"
              className="flex flex-col w-[150px] items-center border p-3 cursor-pointer hover:bg-gray-700 transition-colors rounded-2xl"
            >
              {({ isActive }) => (
                <>
                  <FaUserNinja
                    className={`${iconClass} ${isActive ? "text-orange-500" : ""}`}
                  />
                  <span className="text-[12px] mt-2">Añadir Usuario</span>
                </>
              )}
            </NavLink>
            <NavLink
              to="/soft-benjasx/add-menu"
              className="flex flex-col w-[150px] items-center border p-3 cursor-pointer hover:bg-gray-700 transition-colors rounded-2xl"
            >
              {({ isActive }) => (
                <>
                  <MdRestaurantMenu
                    className={`${iconClass} ${isActive ? "text-orange-500" : ""}`}
                  />
                  <span className="text-[12px] mt-2">Agregar Platillo</span>
                </>
              )}
            </NavLink>
          </>
        )}

        <NavLink
          to="/soft-benjasx/add-sale"
          className="flex flex-col w-[150px] items-center border p-3 cursor-pointer hover:bg-gray-700 transition-colors rounded-2xl"
        >
          {({ isActive }) => (
            <>
              <MdShoppingCart
                className={`${iconClass} ${isActive ? "text-orange-500" : ""}`}
              />
              <span className="text-[12px] mt-2">Generar Venta</span>
            </>
          )}
        </NavLink>
        <NavLink
          to="/soft-benjasx/view-menu"
          className="flex flex-col w-[150px] items-center border p-3 cursor-pointer hover:bg-gray-700 transition-colors rounded-2xl"
        >
          {({ isActive }) => (
            <>
              <IoFastFood
                className={`${iconClass} ${isActive ? "text-orange-500" : ""}`}
              />
              <span className="text-[12px] mt-2">Ver Menú</span>
            </>
          )}
        </NavLink>
        <NavLink
          to="/soft-benjasx/view-sales"
          className="flex flex-col w-[150px] items-center border p-3 cursor-pointer hover:bg-gray-700 transition-colors rounded-2xl"
        >
          {({ isActive }) => (
            <>
              <FaCashRegister
                className={`${iconClass} ${isActive ? "text-orange-500" : ""}`}
              />
              <span className="text-[12px] mt-2">Ver Ventas</span>
            </>
          )}
        </NavLink>
        <NavLink
          to="/auth/login"
          className="flex flex-col w-[150px] items-center border p-3 cursor-pointer hover:bg-gray-700 transition-colors rounded-2xl"
          onClick={starLogout}
        >
          {({ isActive }) => (
            <>
              <BiLogOut
                className={`${iconClass} ${isActive ? "text-orange-500" : ""}`}
              />
              <span className="text-[12px] mt-2">Cerrar Sesión</span>
            </>
          )}
        </NavLink>
      </nav>
      {/* <div className="size-25 bg-gray-800 rounded-full fixed left-1/2 top-45 -translate-x-1/2 -z-10 shadow-2xl"></div> */}
    </div>
  );
};

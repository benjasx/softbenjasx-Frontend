import { useSelector } from "react-redux";

export const MenuItem = ({ platillo, addToCart }) => {
 

  return (
    <li className="mb-4">
      <button
        className="flex cursor-pointer border-b border-blue-100 py-4 justify-between items-center hover:bg-blue-50 transition-colors w-full"
        onClick={() => addToCart(platillo)}
      >
        <div>
          <h3 className="text-2xl font-semibold text-start">
            {platillo.nombre}
          </h3>
          <p className="text-gray-600 text-xl text-start">
            {platillo.descripcion}
          </p>
          <p className="font-bold text-start text-xl">
            Precio: ${platillo.precio}
          </p>
        </div>
        <img
          className="size-34 object-cover rounded"
          src={platillo.imagenUrl}
          alt={platillo.nombre}
        />
      </button>
    </li>
  );
};

export const MenuItemList = ({ platillo }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <li className=" max-w-5xl m-auto flex border-b border-blue-100 py-4 justify-between items-center w-full">
      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-start">{platillo.nombre}</h3>
        <p className="text-gray-600 text-xl text-start">
          {platillo.descripcion}
        </p>
        <p className="font-bold text-start text-xl">
          Precio: ${platillo.precio}
        </p>
        <span
          className={`mt-4 p-3 py-1 inline-block rounded-full text-white font-semibold text-sm ${
            platillo.disponible ? "bg-blue-500" : "bg-red-500"
          }`}
        >
          {platillo.disponible ? "Si hay" : "No hay"}
        </span>
      </div>

      <div className="flex items-center gap-4">
        {user.role === "ADMIN" && ( // Aquí está la corrección: "&" se cambia por "&&"
          <div className="flex flex-col space-y-2">
            {/* Botón de Editar */}
            <button className="cursor-pointer bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-200">
              Editar
            </button>

            {/* Botón de Eliminar */}
            <button className="cursor-pointer bg-red-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition-colors duration-200">
              Eliminar
            </button>
          </div>
        )}

        <img
          className="size-60 ml-15 object-cover rounded-lg shadow-lg"
          src={platillo.imagenUrl}
          alt={platillo.nombre}
        />
      </div>
    </li>
  );
};

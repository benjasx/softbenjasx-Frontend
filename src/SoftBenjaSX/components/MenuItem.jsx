
export const MenuItem = ({platillo, addToCart}) => {
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
          src={platillo.urlImagen}
          alt={platillo.nombre}
        />
      </button>
    </li>
  );
};

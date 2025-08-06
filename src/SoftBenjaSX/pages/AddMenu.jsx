export const AddMenu = () => {
  return (
    <div className="max-w-7xl gap-6 mx-auto mt-70 p-8 shadow-2xl rounded-2xl border border-blue-100 flex items-stretch">
      <div className="w-1/2 pl-8 flex flex-col justify-center">
        <h1 className="text-3xl font-extrabold mb-8 text-blue-700 text-center tracking-tight">
          Agregar un nuevo platillo
        </h1>

        <form className="space-y-6">
          <div>
            <label
              className="block mb-2 font-semibold text-blue-800"
              htmlFor="nombre"
            >
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
              autoComplete="off"
            />
          </div>
          <div>
            <label
              className="block mb-2 font-semibold text-blue-800"
              htmlFor="descripcion"
            >
              Descripción
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
              required
              autoComplete="off"
              rows={3}
            />
          </div>
          <div>
            <label
              className="block mb-2 font-semibold text-blue-800"
              htmlFor="precio"
            >
              Precio
            </label>
            <input
              type="number"
              id="precio"
              name="precio"
              className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
              autoComplete="off"
              min="0"
              step="0.01"
              inputMode="decimal"
            />
          </div>
          <div>
            <label
              className="block mb-2 font-semibold text-blue-800"
              htmlFor="urlImagen"
            >
              Url de la imagen
            </label>
            <input
              type="text"
              id="urlImagen"
              name="urlImagen"
              className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>
          <div>
            <label
              className="block mb-2 font-semibold text-blue-800"
              htmlFor="categoria"
            >
              Categoría
            </label>
            <select
              id="categoria"
              name="categoria"
              className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            >
              <option value="">Selecciona una categoría</option>
              <option value="entrada">Entrada</option>
              <option value="plato_principal">Plato Principal</option>
              <option value="postre">Postre</option>
              <option value="bebida">Bebida</option>
            </select>
          </div>
          <div className="flex items-center space-x-4">
            <label
              className="block mb-2 font-semibold text-blue-800"
              htmlFor="disponible"
            >
              Registrar como Disponible
            </label>
            <input
              type="checkbox"
              id="disponible"
              name="disponible"
              className="w-5 h-5 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition active:scale-95"
          >
            Añadir Platillo
          </button>
        </form>
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
          alt="Menú de restaurante"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

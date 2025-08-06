export const AddUser = () => {
  return (
    <div className="max-w-7xl mx-auto mt-70 p-8 shadow-2xl rounded-2xl border border-blue-100 flex items-stretch">
      {/* Imagen al lado izquierdo */}
      <div className="w-1/2 flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=80"
          alt="Restaurante"
          className="object-cover rounded-2xl h-full w-full"
        />
      </div>
      {/* Formulario */}
      <div className="w-1/2 pl-8 flex flex-col justify-center">
        <h1 className="text-3xl font-extrabold mb-8 text-blue-700 text-center tracking-tight">
          Añadir Usuario
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
              htmlFor="correo"
            >
              Correo
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
              autoComplete="off"
            />
          </div>
          <div>
            <label
              className="block mb-2 font-semibold text-blue-800"
              htmlFor="contrasena"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
              autoComplete="new-password"
            />
          </div>
          <div>
            <label
              className="block mb-2 font-semibold text-blue-800"
              htmlFor="confirmarContrasena"
            >
              Confirmar Contraseña
            </label>
            <input
              type="password"
              id="confirmarContrasena"
              name="confirmarContrasena"
              className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
              autoComplete="new-password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition active:scale-95"
          >
            Añadir Usuario
          </button>
        </form>
      </div>
    </div>
  );
};

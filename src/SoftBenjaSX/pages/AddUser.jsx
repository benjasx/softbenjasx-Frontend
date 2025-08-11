import { useAuthStore } from "../../hooks/useAuthStore";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";

const registerFormFields = {
  registerName: "",
  registerEmail: "",
  registerpassword: "",
  registerpassword2: "",
};

export const AddUser = () => {
  const {
    registerName,
    registerEmail,
    registerpassword,
    registerpassword2,
    role,
    onInputChange,
  } = useForm(registerFormFields);

  const { startRegister } = useAuthStore();

  const registerSubmit = (event) => {
    event.preventDefault();

    if (registerpassword !== registerpassword2) {
      Swal.fire(
        "Error en el registro",
        "Las contraseñas no son iguales",
        "error"
      );
      return;
    }

    startRegister({
      name: registerName,
      email: registerEmail,
      password: registerpassword,
      role: role,
    });

    
  };

  return (
    <div className="max-w-7xl mx-auto mt-30 p-8 shadow-2xl rounded-2xl border border-blue-100 flex items-stretch">
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

        <form onSubmit={registerSubmit} className="space-y-6">
          <div>
            <label
              className="block mb-2 font-semibold text-blue-800"
              htmlFor="registerName"
            >
              Nombre
            </label>
            <input
              type="text"
              id="registerName"
              name="registerName"
              className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
              autoComplete="off"
              value={registerName}
              onChange={onInputChange}
            />
          </div>
          <div>
            <label
              className="block mb-2 font-semibold text-blue-800"
              htmlFor="role"
            >
              Rol
            </label>
            <select
              id="role"
              name="role"
              className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
              defaultValue=""
              value={role}
              onChange={onInputChange}
            >
              <option value="" disabled>
                Selecciona un rol
              </option>
              <option value="ADMIN">Administrador</option>
              <option value="USER">Usuario</option>
            </select>
          </div>
          <div>
            <label
              className="block mb-2 font-semibold text-blue-800"
              htmlFor="registerEmail"
            >
              Correo
            </label>
            <input
              type="email"
              id="registerEmail"
              name="registerEmail"
              className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
              autoComplete="off"
              value={registerEmail}
              onChange={onInputChange}
            />
          </div>
          <div>
            <label
              className="block mb-2 font-semibold text-blue-800"
              htmlFor="registerpassword"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="registerpassword"
              name="registerpassword"
              className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
              autoComplete="new-password"
              value={registerpassword}
              onChange={onInputChange}
            />
          </div>
          <div>
            <label
              className="block mb-2 font-semibold text-blue-800"
              htmlFor="registerpassword2"
            >
              Confirmar Contraseña
            </label>
            <input
              type="password"
              id="registerpassword2"
              name="registerpassword2"
              className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
              autoComplete="new-password"
              value={registerpassword2}
              onChange={onInputChange}
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

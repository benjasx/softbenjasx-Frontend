import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { usePlatilloStore } from "../../hooks/usePlatillos";
import { useMemo } from "react";

const formValues = {
  nombre: "",
  descripcion: "",
  precio: 0,
  imagenUrl: "",
  categoria: "",
  disponible: false,
};

export const AddMenu = () => {
  const { selectedPlatillo } = useSelector((state) => state.menu);

  // 1. Usa useMemo para crear el objeto inicial del formulario
  // Si hay un platillo, usa sus datos. Si no, usa el objeto formValues vacío.
  // Esto asegura que el `initialForm` del hook no cambie a menos que el platillo cambie.
  const initialForm = useMemo(() => {
    return selectedPlatillo ? selectedPlatillo : formValues;
  }, [selectedPlatillo]);

  const {
    formState,
    nombre,
    descripcion,
    precio,
    imagenUrl,
    categoria,
    disponible,
    onInputChange,
    onResetForm,
  } = useForm(initialForm);

  const { starSavingMenu } = usePlatilloStore();

  // 2. Este useEffect ya no es necesario, ya que el hook se inicializa
  // con los valores correctos desde el principio. onResetForm solo se usará
  // en el onSubmit.

  const onSubmit = (event) => {
    event.preventDefault();
    starSavingMenu(formState);
    console.log(formState);
    onResetForm();
  };

  return (
    <div className="max-w-7xl gap-6 mx-auto mt-30 p-8 shadow-2xl rounded-2xl border border-blue-100 flex items-stretch">
      <div className="w-1/2 pl-8 flex flex-col justify-center">
        <h1 className="text-xl font-extrabold mb-8 text-blue-700 text-center tracking-tight">
          {selectedPlatillo ? "Editar platillo" : "Agregar un nuevo platillo"}
        </h1>

        <form onSubmit={onSubmit} className="space-y-6">
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
              value={nombre}
              onChange={onInputChange}
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
              value={descripcion}
              onChange={onInputChange}
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
              value={precio}
              onChange={onInputChange}
            />
          </div>
          <div>
            <label
              className="block mb-2 font-semibold text-blue-800"
              htmlFor="imagenUrl"
            >
              Url de la imagen
            </label>
            <input
              type="text"
              id="imagenUrl"
              name="imagenUrl"
              className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
              value={imagenUrl}
              onChange={onInputChange}
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
              value={categoria}
              onChange={onInputChange}
            >
              <option value="">Selecciona una categoría</option>
              <option value="Platillos">Platillo</option>
              <option value="Bebidas">Bebida</option>
              <option value="Postres">Postre</option>
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
              checked={disponible}
              onChange={onInputChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition active:scale-95"
          >
            {selectedPlatillo ? "Actualizar Platillo" : "Añadir Platillo"}
          </button>
        </form>
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        <img
          src={imagenUrl ? imagenUrl : "../public/selectImage.png"}
          alt={imagenUrl ? imagenUrl : "No hay imagen"}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

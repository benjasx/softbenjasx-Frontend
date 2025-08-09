import React, { useState } from "react";

// Simulación de ventas
const ventasSimuladas = [
  {
    id: 1,
    nombre: "Pizza Margarita",
    cantidad: 2,
    precio: 120,
    fecha: "2025-08-05",
  },
  {
    id: 2,
    nombre: "Hamburguesa Clásica",
    cantidad: 1,
    precio: 80,
    fecha: "2025-08-05",
  },
  {
    id: 3,
    nombre: "Pizza Margarita",
    cantidad: 1,
    precio: 120,
    fecha: "2025-08-05",
  },
];

function getToday() {
  return new Date().toISOString().slice(0, 10);
}

export const Ventas = () => {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(getToday());

  const ventasFiltradas = ventasSimuladas.filter(
    (venta) => venta.fecha === fechaSeleccionada
  );

  return (
    <div className="max-w-[1000px] mx-auto mt-70 mb-10 p-8 shadow-2xl rounded-2xl border border-blue-100">
      <h1 className="text-2xl font-bold mb-6 text-blue-700 text-center">
        Ventas Generadas
      </h1>
      <div className="mb-6 flex justify-center items-center gap-4">
        <label htmlFor="fecha" className="font-semibold text-blue-700">
          Selecciona la fecha:
        </label>
        <input
          type="date"
          id="fecha"
          value={fechaSeleccionada}
          onChange={(e) => setFechaSeleccionada(e.target.value)}
          className="border rounded px-2 py-1"
        />
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-100">
            <th className="py-2 px-4 border-b text-left">ID</th>
            <th className="py-2 px-4 border-b text-left">Cantidad</th>
            <th className="py-2 px-4 border-b text-left">Nombre</th>
            <th className="py-2 px-4 border-b text-left">Precio</th>
            <th className="py-2 px-4 border-b text-left">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {ventasFiltradas.length === 0 ? (
            <tr>
              <td colSpan={5} className="py-4 text-center text-gray-500">
                No hay ventas para esta fecha.
              </td>
            </tr>
          ) : (
            ventasFiltradas.map((venta) => (
              <tr key={venta.id} className="hover:bg-blue-50">
                <td className="py-2 px-4 border-b">{venta.id}</td>
                <td className="py-2 px-4 border-b">{venta.cantidad}</td>
                <td className="py-2 px-4 border-b">{venta.nombre}</td>
                <td className="py-2 px-4 border-b">${venta.precio}</td>
                <td className="py-2 px-4 border-b">{venta.fecha}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

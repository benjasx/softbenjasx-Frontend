import React, { useEffect, useState } from "react";
import { useSaleStore } from "../../hooks/useSales";
import { DetalleVenta } from './DetalleVenta'; // 🔑 Importa el componente de detalle

const getTodayFormatted = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const Ventas = () => {
  const { startLoadingSales, salesList } = useSaleStore();
  const [fechaSeleccionada, setFechaSeleccionada] = useState(getTodayFormatted());
  const [ventaSeleccionada, setVentaSeleccionada] = useState(null); // 🔑 Estado para la venta seleccionada

  useEffect(() => {
    startLoadingSales();
  }, [startLoadingSales]);

  const ventasFiltradas = salesList?.filter((venta) => 
    venta?.date?.slice(0, 10) === fechaSeleccionada
  ) || [];

  // 🔑 Función para cerrar la vista de detalle
  const handleCerrarDetalle = () => {
    setVentaSeleccionada(null);
  };

  return (
    <div className="max-w-[1000px] mx-auto mt-70 mb-10 p-8 shadow-2xl rounded-2xl border border-blue-100">
      <h1 className="text-2xl font-bold mb-6 text-blue-700 text-center">
        Ventas Generadas por fechas
      </h1>

      {ventaSeleccionada ? (
        // 🔑 Renderiza el componente de detalle si hay una venta seleccionada
        <DetalleVenta venta={ventaSeleccionada} onCerrar={handleCerrarDetalle} />
      ) : (
        // 🔑 Renderiza la tabla si no hay una venta seleccionada
        <>
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
                <th className="py-2 px-4 border-b text-left">Cliente</th>
                <th className="py-2 px-4 border-b text-left">Cantidad de productos</th>
                <th className="py-2 px-4 border-b text-left">Total</th>
                <th className="py-2 px-4 border-b text-left">Fecha</th>
                <th className="py-2 px-4 border-b text-left">Acciones</th>
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
                  <tr key={venta._id} className="hover:bg-blue-50">
                    <td className="py-2 px-4 border-b">{venta.cliente}</td>
                    <td className="py-2 px-4 border-b">{venta.productos.length}</td>
                    <td className="py-2 px-4 border-b">${venta.total}</td>
                    <td className="py-2 px-4 border-b">{venta.date.slice(0, 10)}</td>
                    <td className="py-2 px-4 border-b">
                      <button 
                        className="bg-blue-500 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-blue-600"
                        onClick={() => setVentaSeleccionada(venta)} // 🔑 Al hacer clic, se actualiza el estado
                      >
                        Ver ticket
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};
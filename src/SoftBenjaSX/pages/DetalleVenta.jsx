import React from 'react';

export const DetalleVenta = ({ venta, onCerrar }) => { // 🔑 Recibe el prop onCerrar
  if (!venta) {
    return <p className="text-center text-gray-500">No se ha seleccionado una venta.</p>;
  }

  const { cliente, productos, total, date, user } = venta;

  const fechaFormateada = new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="max-w-3xl mx-auto p-8 shadow-2xl rounded-2xl border border-blue-100 bg-white">
      {/* 🔑 Botón para cerrar la vista de detalle */}
      <div className="flex justify-end mb-4">
        <button 
          onClick={onCerrar} 
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded"
        >
          Cerrar
        </button>
      </div>

      <div className="text-center mb-6 border-b pb-4">
        <h1 className="text-3xl font-extrabold text-blue-800">Detalle de la Venta</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-gray-600 font-semibold">Cliente:</p>
          <p className="text-gray-800 text-lg">{cliente}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Vendedor:</p>
          <p className="text-gray-800 text-lg">{user.name}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Fecha de venta:</p>
          <p className="text-gray-800 text-lg">{fechaFormateada}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Total:</p>
          <p className="text-green-600 text-2xl font-bold">{`$${total}`}</p>
        </div>
      </div>

      <hr className="my-6" />

      <h2 className="text-2xl font-bold mb-4 text-blue-700 text-center">Productos vendidos</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-blue-50 text-blue-800">
              <th className="py-3 px-4 border-b-2 text-left text-sm font-semibold">Producto</th>
              <th className="py-3 px-4 border-b-2 text-left text-sm font-semibold">Cantidad</th>
              <th className="py-3 px-4 border-b-2 text-left text-sm font-semibold">Precio Unitario</th>
            </tr>
          </thead>
          <tbody>
            {productos.map(producto => (
              <tr key={producto._id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{producto.nombre}</td>
                <td className="py-3 px-4">{producto.cantidad}</td>
                <td className="py-3 px-4">{`$${producto.precio}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
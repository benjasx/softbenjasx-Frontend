import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  salesList: [],
  isLoadingSales: false,
  error: null,
};

export const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    // Reducer para agregar una nueva venta al historial
    onAddNewSale: (state, action) => {
      state.salesList.push(action.payload);
    },
    // Reducer para limpiar el historial de ventas (opcional)
    onClearSales: (state) => {
      state.salesList = [];
    },
    // Puedes agregar más reducers, como para actualizar o eliminar ventas
  },
});

// Exporta las acciones que se generaron automáticamente
export const { onAddNewSale, onClearSales } = salesSlice.actions;

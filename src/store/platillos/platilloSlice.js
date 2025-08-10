import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  platillos: [],
  selectedPlatillo: null,
  isLoading: false,
  error: null,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    onLoadMenu: (state, { payload = [] }) => {
      state.isLoadingplatillos = false;
      state.platillos = payload; // Esto reemplaza el array completo
    },
    selectPlatillo: (state, action) => {
      state.selectedPlatillo = action.payload;
    },
    onAddNewMenu: (state, { payload }) => {
      state.platillos.push(payload);
      state.selectedPlatillo = null;
    },
    removePlatillo: (state, action) => {
      state.platillos = state.platillos.filter((p) => p.id !== action.payload);
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    clearSelectedPlatillo: (state) => {
      state.selectedPlatillo = null;
    },
  },
});

export const {
  onLoadMenu,
  selectPlatillo,
  onAddNewMenu,
  removePlatillo,
  setLoading,
  setError,
  clearSelectedPlatillo,
} = menuSlice.actions;

export default menuSlice.reducer;

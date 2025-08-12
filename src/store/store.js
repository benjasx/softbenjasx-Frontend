import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { menuSlice } from "./platillos/platilloSlice";
import { salesSlice } from "./ventas/ventaSlice";


export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    menu: menuSlice.reducer,
    sales: salesSlice.reducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

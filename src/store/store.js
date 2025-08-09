import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { menuSlice } from "./platillos/platilloSlice";


export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    menu: menuSlice.reducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

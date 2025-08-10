import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { MainLayout } from "../SoftBenjaSX/layout/MainLayout";
import { AddMenu, AddUser, AddSale, Menu, Ventas } from "../SoftBenjaSX/pages";
import LoginPage from "../auth/LoginPage";
import { useAuthStore } from "../hooks/useAuthStore";
import { useEffect } from "react";

export const AppRouter = () => {
  const { status, checkAuthToken, user } = useAuthStore();
  
  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking") {
    return <h3>...Cargando</h3>;
  }

  return (
    <BrowserRouter>
      <Routes>
        {status === "not-authenticated" ? (
          // Rutas para usuarios NO autenticados
          <>
            <Route path="/auth/*" element={<LoginPage />} />
            <Route path="/*" element={<Navigate to="/auth/login" replace />} />
          </>
        ) : (
          // Rutas para usuarios autenticados (ADMIN o USER)
          <>
            <Route path="/soft-benjasx" element={<MainLayout />}>
              <Route path="add-sale" element={<AddSale />} />
              <Route path="view-menu" element={<Menu />} />
              <Route path="view-sales" element={<Ventas />} />

              {/* Estas rutas solo son accesibles para ADMIN */}
              {user.role === "ADMIN" && (
                <>
                  <Route path="add-user" element={<AddUser />} />
                  <Route path="add-menu" element={<AddMenu />} />
                </>
              )}

              {/* Ruta comodín anidada que redirige a la página principal del dashboard
                                si se intenta acceder a una ruta que no existe en el dashboard.
                                El "to" debe ser absoluto para evitar el bucle.
                            */}
              <Route
                path="*"
                element={<Navigate to="/soft-benjasx/add-sale" replace />}
              />
            </Route>

            {/* Esta ruta comodín captura cualquier URL fuera del /soft-benjasx/* */}
            <Route
              path="*"
              element={<Navigate to="/soft-benjasx/add-sale" replace />}
            />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

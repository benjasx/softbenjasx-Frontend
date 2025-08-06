import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { MainLayout } from "../SoftBenjaSX/layout/MainLayout";
import { AddMenu, AddUser, AddSale, Menu, Ventas, } from "../SoftBenjaSX/pages";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="soft-benjasx" element={<MainLayout />}>
          <Route path="add-sale" element={<AddSale />} />
          <Route path="add-user" element={<AddUser />} />
          <Route path="add-menu" element={<AddMenu />} />
          <Route path="view-menu" element={<Menu />} />
          <Route path="view-sales" element={<Ventas />} />
        </Route>
         <Route path="*" element={<Navigate to={'/soft-benjasx/add-sale'} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

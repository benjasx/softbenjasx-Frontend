import { useDispatch, useSelector } from "react-redux";
import softbenjasxAPI from "../api/softbenjasxAPI";
import { onAddNewMenu, onLoadMenu } from "../store/platillos";
import Swal from "sweetalert2";
import { useState } from "react";

export const usePlatilloStore = () => {
  const dispatch = useDispatch();
  const { platillos } = useSelector((state) => state.menu);

  const starSavingMenu = async (menu) => {
    try {
      if (menu.id) {
        // TODO: Actualizar
        return;
      }

      // Crear
      const { data } = await softbenjasxAPI.post("/platillos", menu);
      dispatch(onAddNewMenu({ ...menu, id: data.platillo._id }));
      Swal.fire("Registro exitoso", data.msg, "success");
    } catch (error) {}
  };

  const startLoadingMenu = async () => {
    try {
      const { data } = await softbenjasxAPI.get("/platillos");
      const menu = data.platillos;
      dispatch(onLoadMenu(menu));
    } catch (error) {
      console.log("error al cargar Menu");
      console.log(error);
    }
  };

  return {
    //propiedades
    platillos,

    // metodos
    starSavingMenu,
    startLoadingMenu,
  };
};

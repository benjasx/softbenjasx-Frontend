import { useDispatch, useSelector } from "react-redux";
import softbenjasxAPI from "../api/softbenjasxAPI";
import {
  onAddNewMenu,
  onLoadMenu,
  onUpdateMenu,
  selectPlatillo,
} from "../store/platillos";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

export const usePlatilloStore = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { platillos } = useSelector((state) => state.menu);

  const starSavingMenu = async (menu) => {
    try {
      if (menu._id) {
        // TODO: Actualizar
        await softbenjasxAPI.put(`/platillos/${menu._id}`, menu);
        Swal.fire(
          "Se actualizo correctamente",
          "No hay problemas al guardar bro",
          "success"
        );
        dispatch(onUpdateMenu());
        navigate("/soft-benjasx/add-sale");
        return;
      }

      // Crear
      const { data } = await softbenjasxAPI.post("/platillos", menu);
      dispatch(onAddNewMenu({ ...menu, id: data.platillo._id }));
      navigate("/soft-benjasx/add-sale");

      Swal.fire("Registro exitoso", data.msg, "success");
    } catch (error) {
      console.log(error);
      Swal.fire("Error al guardar", error.response.data.message, "error");
    }
  };

  const seleccionarPlatillo = (platillo) => {
    dispatch(selectPlatillo(platillo));
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

  const starDeleteMenu = async (menuId) => {
    console.log(menuId);

    try {
      await softbenjasxAPI.delete(`/platillos/${menuId}`);
      dispatch(onUpdateMenu());
      navigate("/soft-benjasx/add-sale");
      Swal.fire(
        "Platillo eliminado",
        "Pltillo eliminado correctamente",
        "error"
      );
    } catch (error) {
      console.log(error);
      Swal.fire("Error al eliminar", error.response.data.massage, "error");
    }
  };

  return {
    //propiedades
    platillos,

    // metodos
    starSavingMenu,
    startLoadingMenu,
    seleccionarPlatillo,
    starDeleteMenu,
  };
};

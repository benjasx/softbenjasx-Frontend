import { useDispatch, useSelector } from "react-redux";
import softbenjasxAPI from "../api/softbenjasxAPI";
import { onAddNewMenu } from "../store/platillos";
import Swal from "sweetalert2";


export const usePlatilloStore = () => {
  const dispatch = useDispatch();

  const starSavingMenu = async (menu) => {
    try {
      if (menu.id) {
        // TODO: Actualizar
        return;
      }

      // Crear
      const { data } = await softbenjasxAPI.post("/platillos", menu);
      dispatch(onAddNewMenu({...menu, id: data.platillo._id}))
      Swal.fire("Registro exitoso", data.msg, "success");
    } catch (error) {}
  };


  return {
    //propiedades


    // metodos
    starSavingMenu,
  }
};

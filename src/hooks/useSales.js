import { useDispatch, useSelector } from "react-redux";
import softbenjasxAPI from "../api/softbenjasxAPI";
import Swal from "sweetalert2";
import { onLoadSales } from "../store/ventas/ventaSlice";

export const useSaleStore = () => {
  const dispatch = useDispatch();
  const { salesList } = useSelector((state) => state.sales);

  const startSavingSale = async (sale) => {
    try {
      console.log(sale);
      await softbenjasxAPI.post("/ventas/", sale);
    } catch (error) {
      console.log(error);
      Swal.fire("Error al guardar", error.response.data.message, "error");
    }
  };

  const startLoadingSales = async () => {
    try {
      const { data } = await softbenjasxAPI.get("/ventas/");
      dispatch(onLoadSales(data.ventas));
      /* dispatch(onLoadEvents(events)); */
    } catch (error) {
      console.log("error al cargar Ventas");
      console.log(error);
    }
  };

  return {
    // Propiedades
    salesList,

    // Metodos
    startSavingSale,
    startLoadingSales,
  };
};

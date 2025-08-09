import { useDispatch, useSelector } from "react-redux";
import {
  clearErrorMessage,
  onchecking,
  onlogin,
  onLogout,
} from "../store/auth";
import { softbenjasxAPI } from "../api";
import Swal from "sweetalert2";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onchecking());
    try {
      const { data } = await softbenjasxAPI.post("/auth", { email, password });
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(onlogin({ name: data.name, uid: data.uid, role: data.role }));
    } catch (error) {
      dispatch(onLogout("Credenciales incorrectas"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startRegister = async ({ name, email, password, role }) => {
    try {
      const { data } = await softbenjasxAPI.post("/auth/new", {
        name,
        email,
        password,
        role,
      });

      Swal.fire("Registro exitoso", data.msg, "success");
    } catch (error) {
      const msg = error.response.data.msg
      console.log(`%c${msg}`, 'color: red;');
      Swal.fire("Error en el registro", msg, "error");
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogout());

    try {
      const { data } = await softbenjasxAPI.get("/auth/renew");
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(onlogin({ name: data.name, uid: data.uid, role: data.role }));
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  const starLogout = () => {
    localStorage.clear();
    dispatch(onLogoutCalendar());
    dispatch(onLogout());
  };

  return {
    // Propiedades
    errorMessage,
    status,
    user,

    // Metodos
    checkAuthToken,
    starLogout,
    startLogin,
    startRegister,
  };
};

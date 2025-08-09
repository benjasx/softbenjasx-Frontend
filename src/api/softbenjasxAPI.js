import axios from "axios";

import { getEnvVariables } from "../helpers/getEnvVariable";

const { VITE_API_URL } = getEnvVariables();

const softbenjasxAPI = axios.create({
  baseURL: VITE_API_URL,
});

// Configuración de interceptores para manejar errores globalmente
softbenjasxAPI.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    "x-token": localStorage.getItem("token"),
  };
  return config;
});


export default softbenjasxAPI;
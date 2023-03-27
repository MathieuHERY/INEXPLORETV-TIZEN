import axios from "axios";
import { apiBase } from "../config/config";

axios.defaults.baseURL = apiBase;

const axiosInstance = axios.create();
axiosInstance.defaults.headers.post["Content-Type"] = "multipart/form-data";

axiosInstance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;

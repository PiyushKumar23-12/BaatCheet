import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE==="development"?"https://baatcheet-33qm.onrender.com/api":"https://baatcheet-33qm.onrender.com/api",
    withCredentials: true,
  });
  
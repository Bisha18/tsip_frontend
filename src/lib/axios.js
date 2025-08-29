// https://tsipw.vercel.app/

import axios from "axios";

const BASE_URL=import.meta.env.MODE==="development"?
"http://localhost:4000/api":
"https://tsipw.vercel.app/api";

export const axiosInstance = axios.create({
  baseURL:BASE_URL,
  withCredentials:true
})
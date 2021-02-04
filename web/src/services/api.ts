import axios, {AxiosRequestConfig} from "axios";
import { getToken } from './auth';

const api = axios.create({
    baseURL: "https://npcadmin.herokuapp.com"
  });

api.interceptors.request.use(async (config: AxiosRequestConfig) => {
    const token = getToken();
    if(token)
        config.headers.Authorization =`Bearer ${token}`;
    return config;
})

export default api;
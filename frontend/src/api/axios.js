import axios from "axios";
import Constants from "expo-constants";
const baseURL = Constants.expoConfig.extra.API_URL + "/api";
export const api = axios.create({ baseURL });

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token ? `Bearer ${token}` : "";
};

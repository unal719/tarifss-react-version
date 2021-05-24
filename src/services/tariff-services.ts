import axios from "axios";

export const getTariffs = () => {
  return axios.get("/api/tariffs");
};

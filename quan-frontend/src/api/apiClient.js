import axios from "axios";

// axios.defaults.withCredentials = true;
// axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
const apiClient = axios.create({
  baseURL: "https://63fda4371626c165a09c85f7.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;

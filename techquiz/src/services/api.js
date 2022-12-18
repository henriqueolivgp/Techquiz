import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1400/api",
});

export default api;
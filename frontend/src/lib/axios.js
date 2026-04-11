import axios from "axios";

const isLocalhost = typeof window !== "undefined" && ["localhost", "127.0.0.1"].includes(window.location.hostname);
const API_URL = isLocalhost
  ? "http://localhost:5001"
  : import.meta.env.VITE_API_URL || "https://whispyr-io-v2.onrender.com";

export const axiosInstance = axios.create({
  baseURL: `${API_URL}/api`,
  withCredentials: true,
});

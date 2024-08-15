import axios from "axios";

let url;
if (import.meta.env.VITE_HOST && import.meta.env.VITE_PORT) {
  url = `http://${import.meta.env.VITE_HOST}:${
    import.meta.env.VITE_PORT || "3000"
  }/api/`;
} else if (import.meta.env.VITE_HOST && !import.meta.env.VITE_PORT) {
  url = `http://${import.meta.env.VITE_HOST}/api/`;
} else {
  url = import.meta.env.VITE_URL;
}

const api = axios.create({
  baseURL: url,
});

export default api;

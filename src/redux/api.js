import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    // console.log("request start !=>", config);
    return config;
  },
  (err) => {
    // console.log("request err!=>", err);
    return Promise.reject(err);
  }
);

api.interceptors.response.use(
  (res) => {
    // console.log("response suc!=>", res);
    return res;
  },
  (err) => {
    // console.log("response err!=>", err);
    return Promise.reject(err);
  }
);

export default api;

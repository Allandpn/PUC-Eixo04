import axios from "https://cdn.jsdelivr.net/npm/axios@1.6.2/+esm";

export const apiBase = axios.create({
  baseURL: " http://localhost:3333/",
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use(
  (config) => {
    console.log(
      `${config.method.toUpperCase()} request sent to ${config.url}
       at ${new Date().getTime()}`
    );

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

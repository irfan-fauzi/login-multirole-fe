import axios from "axios";

const Http = axios.create({
  baseURL: "http://localhost:5000/",
  timeout: 100000,
  headers: { "Content-Type": "application/json" },
});

Http.interceptors.response.use(
  (response) => {
    return response;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (error: any) => {
    return Promise.reject(error);
  }
);

export default Http
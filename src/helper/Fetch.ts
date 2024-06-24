/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import type { InternalAxiosRequestConfig } from "axios";
import { jwtDecode } from "jwt-decode";
import AuthAttributes from "../interface/AuthUserInterface";
import AuthUser from "./AuthUser";

const Http = axios.create({
  baseURL: "http://localhost:5000/",
  timeout: 100000,
  headers: { "Content-Type": "application/json" },
});

Http.interceptors.request.use(
  async (req: InternalAxiosRequestConfig) => {
    if (req.headers?.Authorization) {
      const authHeader = req.headers.Authorization;
      // Bearer ...token
      const currentToken = authHeader && authHeader.toString().split(" ")[1];
      const decoded: any = currentToken && jwtDecode(currentToken);
      const expired = decoded?.exp;
      const currentDate = new Date();
      if (expired * 1000 < currentDate.getDate()) {
        const resData = await Http.get(
          "http://localhost:5000/user/refresh-token",
          {
            withCredentials: true,
          }
        );
        const response: AuthAttributes = {
          id: resData.data?.data?.id,
          email: resData.data?.data?.email,
          name: resData.data?.data?.name,
          roleId: resData.data?.data?.roleId,
          token: resData.data?.data?.token,
          menuAccess: resData.data?.data?.menuAccess,
        };
        req.headers.Authorization = `Bearer ${resData.data?.data?.token}`;
        AuthUser.SetAuth(response);
      }
    }
    return req;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

Http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default Http;

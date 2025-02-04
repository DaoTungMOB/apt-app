

import axios from "axios";
import { AccountService } from "../AccountService";

type FailedRequest = {
  resolve: (token: string) => void;
  reject: (error: any) => void;
};
export const baseURL = "http://192.168.1.100:8017/v1";
const api = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Giả sử bạn lưu accessToken và refreshToken
let isRefreshing = false;
let failedQueue: FailedRequest[] = [];

const processQueue = (error: any, token: string | null) => {
  failedQueue.forEach((promise) => {
    if (token) {
      promise.resolve(token);
    } else {
      promise.reject(error);
    }
  });
  failedQueue = [];
};
api.interceptors.request.use(
  async (config) => {
    const account = await AccountService.get(); // Lấy từ storage hoặc context
    const accessToken = account?.accessToken;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      if (!isRefreshing) {
        isRefreshing = true;
        try {
          // Gọi API refresh token
          const account = await AccountService.get(); // Lấy từ storage hoặc context
          const refreshToken = account?.refreshToken;
          const refreshResponse = await axios.post<{
            token: string;
            expiresIn: number;
            refreshToken: string;
          }>(`${baseURL}/auth/refresh-token`, {
            refreshToken,
          });

          const newAccessToken = refreshResponse.data.token;

          // Cập nhật token vào storage hoặc context
          // AsyncStorage.setItem('accessToken', newAccessToken);
          await AccountService.set({
            ...account,
            accessToken: refreshResponse.data.token,
            refreshToken: refreshResponse.data.refreshToken,
            expiresIn: refreshResponse.data.expiresIn,
          });

          processQueue(null, newAccessToken);
          isRefreshing = false;

          return api(originalRequest);
        } catch (refreshError) {
          processQueue(refreshError, null);
          isRefreshing = false;
          return Promise.reject(refreshError);
        }
      }

      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      }).then((token) => {
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return api(originalRequest);
      });
    }

    return Promise.reject(error);
  }
);

export default api;

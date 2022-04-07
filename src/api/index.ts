import axios, { AxiosInstance } from 'axios';

const PORT = 3000 as const;

const apiAxiosInstance: AxiosInstance = axios.create({
  baseURL: `http://localhost:${PORT}/`,
  timeout: 1000,
});

const createApi = (axiosInstance: AxiosInstance) => {
  return {
    get: async <T>(query?: string): Promise<T> => {
      const result = await axiosInstance.get<T>(query);
      return result.data;
    },
    post: async <T, U>(data: U, query?: string): Promise<T> => {
      const result = await axiosInstance.post<T>(query, data);
      return result.data;
    },
    patch: async <T, U>(data: U, query?: string): Promise<T> => {
      const result = await axiosInstance.patch<T>(query);
      return result.data;
    },
    delete: async <T>(query?: string): Promise<T> => {
      const result = await axiosInstance.delete<T>(query);
      return result.data;
    },
  };
};

export const api = createApi(apiAxiosInstance);

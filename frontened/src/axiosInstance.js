import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

const setupAxiosInterceptors = (logoutCallback) => {
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response && error.response.status === 419) {
        logoutCallback();
      }

      return Promise.reject(error);
    }
  );
};

export { axiosInstance, setupAxiosInterceptors }
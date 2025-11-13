import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://canvas-server-assignment-10.vercel.app",
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;

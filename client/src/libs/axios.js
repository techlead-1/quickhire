import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://quickhire-server-0yvx.onrender.com/api/v1",
    withCredentials: true,
});

export default axiosInstance;
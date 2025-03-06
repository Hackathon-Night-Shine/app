import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://20.86.25.15:8000/api/"
});

export { axiosInstance };


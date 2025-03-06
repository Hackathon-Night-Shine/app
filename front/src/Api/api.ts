import axios from "axios";
import { Retreat } from "../admin/types/retreatTypes";

const axiosInstance = axios.create({
    baseURL: "http://localhost:443/api"
});

const getRetreats = async (): Promise<Retreat[]> => (await axiosInstance.get('/retreats')).data;

export { axiosInstance, getRetreats };


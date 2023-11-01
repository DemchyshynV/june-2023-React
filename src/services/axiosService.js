import axios from "axios";

import {baseURL} from "../contants";
import {authService} from "./authService";

const axiosService = axios.create({baseURL})

axiosService.interceptors.request.use(request => {
    const token = authService.getToken();

    if (token) {
        request.headers.Authorization = `Bearer ${token}`
    }

    return request
})

export {
    axiosService
}
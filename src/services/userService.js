import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const userService = {
    getAll: () => axiosService.get(urls.users)
}

export {
    userService
}
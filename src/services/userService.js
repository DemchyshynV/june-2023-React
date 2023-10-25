import {axiosService} from "./axiosService";
import {urls} from "../contants/urls";

const userService = {
    getAll: () => axiosService.get(urls.users)
}

export {
    userService
}
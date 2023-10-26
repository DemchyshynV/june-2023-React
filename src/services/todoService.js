import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const todoService = {
    getAll: () => axiosService.get(urls.todos)
}

export {
    todoService
}
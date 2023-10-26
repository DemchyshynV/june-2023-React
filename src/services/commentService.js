import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const commentService = {
    getAll: () => axiosService.get(urls.comments)
}

export {
    commentService
}
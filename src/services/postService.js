import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postService = {
    getById: (id) => axiosService.get(urls.posts.byId(id))
}

export {
    postService
}
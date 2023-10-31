import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postService = {
    getByUserId: (userId) => axiosService.get(urls.posts.base, {params: {userId}}),
    getById: (id) => axiosService.get(urls.posts.byId(id))
}

export {
    postService
}
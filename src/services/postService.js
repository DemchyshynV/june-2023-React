import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postService = {
    getByUserId: (id) => axiosService.get(urls.posts.byUserId(id))
}

export {
    postService
}
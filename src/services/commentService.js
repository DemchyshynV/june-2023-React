import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const commentService = {
    getByPostId: (postId) => axiosService.get(urls.comments, {params: {postId}})
}

export {
    commentService
}
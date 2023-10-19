import {jsonService} from "./jsonService";
import {urls} from "../constants/urls";

const postService = {
    getAll: () => jsonService.get(urls.posts.base),
    getById: (id) => jsonService.get(urls.posts.byId(id))
}

export {
    postService
}
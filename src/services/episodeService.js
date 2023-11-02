import {axiosService} from "./axiosService";
import {urls} from "../constants";

const episodeService = {
    getAll: (page) => axiosService.get(urls.episodes, {params:{page}})
}

export {
    episodeService
}
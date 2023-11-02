import {axiosService} from "./axiosService";
import {urls} from "../constants";

const characterService = {
    getByIds: (ids) => axiosService.get(urls.characters.byIds(ids))
}

export {
    characterService
}
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const userService = {
    getAll:()=>axiosService.get(urls.users),
    create:(user)=>axiosService.post(urls.users, user),
    getById:(id)=>axiosService.get(urls.users+`/${id}`),
    deleteById:(id)=>axiosService.delete(urls.users+`/${id}`),
    sorted:(order)=>axiosService.get('/users/sorted')
}
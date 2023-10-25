import axios from "axios";

import {baseURL} from "../contants/urls";

const axiosService = axios.create({baseURL})


export {
    axiosService
}
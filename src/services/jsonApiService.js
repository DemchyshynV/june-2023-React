import axios from "axios";
import {jsonBaseURL} from "../constants/urls";

const jsonApiService = axios.create({baseURL:jsonBaseURL});


export {
    jsonApiService
}
import axios from "axios";
import {carsBaseURL} from "../constants/urls";

const carsApiService = axios.create({baseURL:carsBaseURL});

export {
    carsApiService
}
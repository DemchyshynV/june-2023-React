import axios from "axios";

import {baseUrlJson} from "../constants/urls";

const jsonService = axios.create({baseURL: baseUrlJson});

export {
    jsonService
}
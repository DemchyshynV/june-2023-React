import axios from "axios";

import {baseUrlSpaceX} from "../constants/urls";

const spaceXService = axios.create({baseURL: baseUrlSpaceX});

export {
    spaceXService
}
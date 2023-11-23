import {carsApiService} from "./carsApiService";
import {urls} from "../constants/urls";

class CarService {
    getAll() {
        return carsApiService.get(urls.cars)
    }
}

export const carService = new CarService();
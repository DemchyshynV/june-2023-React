import {apiService} from "./apiService";

class UserService {
    getAll() {
        return apiService.get('/users')
    }
}

export const userService = new UserService()
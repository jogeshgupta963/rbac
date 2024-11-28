import { User } from "../models/User.js";
class UserService {
    async getById(id) {
        try {
            return await User.findById(id);
        } catch (err) {
            throw err;
        }
    }
    async getByEmail(email) {
        if (!email || typeof email != "string") {
            throw new Error("invalid email");
        }
        try {
            return await User.findOne({ email });
        } catch (err) {
            throw err;
        }
    }
    async createUser(user) {
        try {
            return await User.create(user);
        } catch (err) {
            throw err;
        }
    }
}
export const userService = new UserService();

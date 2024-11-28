import { Role } from "../models/Roles.js";
import { User } from "../models/User.js";
class RoleService {
    async getById(id) {
        try {
            return await Role.findById(id);
        } catch (err) {
            throw err;
        }
    }

    async createRole(role) {
        try {
            const newRole = new Role({
                name: role.name,
                permissions: role.permissions,
            });
            await newRole.save();
            return newRole;
        } catch (err) {
            throw err;
        }
    }
    async getByName(roleName) {
        try {
            return await Role.findOne({ name: roleName });
        } catch (err) {
            throw err;
        }
    }
    async assignRole(userId, roleId) {
        try {
            const user = await User.findById(userId);
            if (!user) throw new Error("User Doesnt Exist");
            const role = await this.getById(roleId);
            if (!role) throw new Error("Role Doesnt Exist");

            user.role = role._id;
            await user.save();
            return user;
        } catch (err) {
            throw err;
        }
    }
}
export const roleService = new RoleService();

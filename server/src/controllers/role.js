import { roleService } from "../services/Role.js";

class RoleController {
    async createRole(req, res, next) {
        try {
            const { name, permissions } = req.body;
            const roleExists = await roleService.getByName(name);
            if (roleExists) {
                throw new Error("Role Already Exists");
            }
            const role = await roleService.createRole({ name, permissions });
            return res.status(201).json({
                success: true,
                data: role,
            });
        } catch (err) {
            next(err);
        }
    }
    async assignRole(req, res, next) {
        try {
            const { userId, roleId } = req.body;
            const user = await roleService.assignRole(userId, roleId);
            return res.status(200).json({
                success: true,
                data: user,
            });
        } catch (err) {
            next(err);
        }
    }
    async getUser(req, res, next) {
        try {
            return res.status(200).json({
                success: true,
                data: req.user,
            });
        } catch (err) {
            next(err);
        }
    }
}
export const roleController = new RoleController();

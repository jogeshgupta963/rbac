import { roleService } from "../services/Role.js";

export function hasRole(roles = []) {
    if (typeof roles == "string") {
        roles = [roles];
    }
    return async (req, res, next) => {
        const user = req.user;
        const userRole = await roleService.getById(user.role);
        console.log(userRole, roles);
        if (roles.includes(userRole.name)) {
            next();
            return;
        }
        return res.status(403).json({
            success: false,
            data: "Insufficient Role",
        });
    };
}

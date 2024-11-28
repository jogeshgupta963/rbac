import { roleService } from "../services/Role.js";

export function hasPermission(permissions = []) {
    if (typeof permissions == "string") {
        permissions = [permissions];
    }
    return async (req, res, next) => {
        const user = req.user;
        const userRole = await roleService.getById(user.role);
        // permissions.forEach((perm) => {
        //     // console.log(perm)
        //     const hasPerm =
        //         userRole.permissions["GET"].includes(perm) ||
        //         userRole.permissions["POST"].includes(perm) ||
        //         userRole.permissions["PUT"].includes(perm) ||
        //         userRole.permissions["DELETE"].includes(perm);
        //     if (!hasPerm) {
        //         return res.status(403).json({
        //             success: false,
        //         });
        //     }
        // });

        const hasAllPermissions = permissions.every((perm) => {
            return (
                userRole.permissions["GET"].includes(perm) ||
                userRole.permissions["POST"].includes(perm) ||
                userRole.permissions["PUT"].includes(perm) ||
                userRole.permissions["DELETE"].includes(perm)
            );
        });

        if (hasAllPermissions) {
            next();
            return;
        }
        return res
            .status(403)
            .json({ success: false, message: "Insufficient permissions" });
    };
}

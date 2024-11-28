export const userCreateValidationArgs = [
    body("name")
        .isString()
        .withMessage("Name must be a string")
        .isIn([
            Roles.guest,
            Roles.user,
            Roles.admin,
            Roles.manager,
            Roles.roleX,
            Roles.roleY,
        ])
        .withMessage("Name must be one of the predefined roles"),
    body("permissions.GET")
        .optional()
        .isArray()
        .withMessage("GET permissions must be an array")
        .custom((value) => {
            const validPermissions = [
                Permissions.get_product,
                Permissions.get_profile,
                Permissions.get_user,
            ];
            return value.every((perm) => validPermissions.includes(perm));
        })
        .withMessage("Invalid GET permissions"),

    body("permissions.POST")
        .optional()
        .isArray()
        .withMessage("POST permissions must be an array")
        .custom((value) => {
            const validPermissions = [
                Permissions.create_product,
                Permissions.create_profile,
                Permissions.create_role,
            ];
            return value.every((perm) => validPermissions.includes(perm));
        })
        .withMessage("Invalid POST permissions"),

    body("permissions.PUT")
        .optional()
        .isArray()
        .withMessage("PUT permissions must be an array")
        .custom((value) => {
            const validPermissions = [
                Permissions.update_product,
                Permissions.update_profile,
                Permissions.assign_role,
                Permissions.update_settings,
            ];
            return value.every((perm) => validPermissions.includes(perm));
        })
        .withMessage("Invalid PUT permissions"),

    body("permissions.DELETE")
        .optional()
        .isArray()
        .withMessage("DELETE permissions must be an array")
        .custom((value) => {
            const validPermissions = [
                Permissions.delete_product,
                Permissions.delete_profile,
            ];
            return value.every((perm) => validPermissions.includes(perm));
        })
        .withMessage("Invalid DELETE permissions"),
];

import express from "express";
import { isLoggedIn, hasRole, hasPermission } from "../middleware/index.js";
import { Roles } from "../utils/constants/roles.js";
import { Permissions } from "../utils/constants/permissions.js";
import { roleController } from "../controllers/role.js";
export const router = express.Router();

router
    .route("/role")
    .post(
        isLoggedIn,
        hasRole([Roles.super_admin, Roles.admin]),
        hasPermission(Permissions.create_role),
        roleController.createRole
    )
    .put(
        isLoggedIn,
        hasRole([Roles.admin, Roles.super_admin]),
        hasPermission(Permissions.assign_role),
        roleController.assignRole
    );

router.route("/").get(isLoggedIn, roleController.getUser);

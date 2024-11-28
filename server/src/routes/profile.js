import express from "express";
import { isLoggedIn, hasRole, hasPermission } from "../middleware/index.js";
import { Roles } from "../utils/constants/roles.js";
import { Permissions } from "../utils/constants/permissions.js";
import { profileController } from "../controllers/profile.js";
export const router = express.Router();

router
    //All roles that has this permission can create a profile
    .route("/")
    .post(
        isLoggedIn,
        hasPermission(Permissions.create_profile),
        profileController.createProfile
    )
    .get(
        isLoggedIn,
        hasPermission(Permissions.get_profile),
        profileController.getProfile
    )
    .put(
        isLoggedIn,
        hasPermission(Permissions.update_profile),
        profileController.updateProfile
    )
    .delete(
        isLoggedIn,
        hasPermission(Permissions.delete_profile),
        profileController.updateProfile
    );

router
    .route("/:userId")
    .get(
        isLoggedIn,
        hasRole([Roles.manager, Roles.admin, Roles.super_admin]),
        hasPermission(Permissions.get_profile),
        profileController.getProfileById
    )
    .delete(
        isLoggedIn,
        hasRole([Roles.admin, Roles.super_admin]),
        hasPermission(Permissions.delete_profile),
        profileController.deleteProfileById
    );

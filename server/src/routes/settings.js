import express from "express";
import { isLoggedIn, hasRole, hasPermission } from "../middleware/index.js";
import { Roles } from "../utils/constants/roles.js";
import { Permissions } from "../utils/constants/permissions.js";
export const router = express.Router();

router
    .route("/:userId")
    .put(
        isLoggedIn,
        hasRole([Roles.super_admin, Roles.admin]),
        hasPermission(Permissions.update_settings),
        (req, res) => {
            return res
                .status(200)
                .json({ success: true, data: "Updated Successfully" });
        }
    );
router
    .route("/")
    .put(isLoggedIn, hasPermission(Permissions.update_settings), (req, res) => {
        return res
            .status(200)
            .json({ success: true, data: "Updated Successfully" });
    });

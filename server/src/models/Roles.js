import mongoose, { mongo } from "mongoose";
import { Roles } from "../utils/constants/roles.js";
import { Permissions } from "../utils/constants/permissions.js";
const schema = new mongoose.Schema({
    name: {
        type: String,
        enum: [
            Roles.guest,
            Roles.user,
            Roles.admin,
            Roles.super_admin,
            Roles.manager,
            Roles.roleX,
            Roles.roleY,
        ],
    },
    permissions: {
        GET: {
            type: [String],
            enum: [
                Permissions.get_product,
                Permissions.get_profile,
                Permissions.get_user,
            ],
            default: [],
        },
        POST: {
            type: [String],
            enum: [
                Permissions.create_product,
                Permissions.create_profile,
                Permissions.create_role,
            ],
            default: [],
        },
        PUT: {
            type: [String],
            enum: [
                Permissions.update_product,
                Permissions.update_profile,
                Permissions.assign_role,
                Permissions.update_settings,
            ],
            default: [],
        },
        DELETE: {
            type: [String],
            enum: [Permissions.delete_product, Permissions.delete_profile],
            default: [],
        },
    },
});

export const Role = new mongoose.model("Role", schema);

import mongoose from "mongoose";
import { roleService } from "../services/Role.js";
import { Roles } from "../utils/constants/roles.js";
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 8,
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
        // default: () => {
        //     return async () => {
        //         console.log(roleService.getByName(Roles.user)._id);
        //         return "abcd";
        //     };
        // },
    },
});
schema.pre("save", async function (done) {
    if (!this.role) {
        this.role = (await roleService.getByName(Roles.user))._id;
    }
    done();
});
export const User = new mongoose.model("User", schema);

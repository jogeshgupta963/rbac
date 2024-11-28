import { roleService } from "../services/Role.js";

class ProfileController {
    async createProfile(req, res, next) {
        try {
            return res.status(201).json({
                success: true,
                data: "Profile Created",
            });
        } catch (err) {
            next(err);
        }
    }
    async getProfile(req, res, next) {
        try {
            return res.status(200).json({
                success: true,
                data: "Profile Fetched",
            });
        } catch (err) {
            next(err);
        }
    }
    async getProfileById(req, res, next) {
        try {
            const id = req.params.userId;
            return res.status(200).json({
                success: true,
                data: "Profile Id feetched",
            });
        } catch (err) {
            next(err);
        }
    }
    async updateProfile(req, res, next) {
        try {
            return res.status(200).json({
                success: true,
                data: "Profile Updated",
            });
        } catch (err) {
            next(err);
        }
    }
    async deleteProfile(req, res, next) {
        try {
            return res.status(200).json({
                success: true,
                data: "Profile Deleted",
            });
        } catch (err) {
            next(err);
        }
    }
    async deleteProfileById(req, res, next) {
        try {
            const id = req.params.userId;
            return res.status(200).json({
                success: true,
                data: "Profile Deleted",
            });
        } catch (err) {
            next(err);
        }
    }
}
export const profileController = new ProfileController();

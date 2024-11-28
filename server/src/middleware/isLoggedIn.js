import { userService } from "../services/User.js";
import "dotenv/config";
import { jwt } from "../utils/helpers/jwt.js";
export async function isLoggedIn(req, res, next) {
    // fetching cookie
    try {
        const decoded = req.cookies[btoa(process.env.COOKIE_NAME)];

        if (!decoded) {
            return res.status(403).json({
                success: false,
                data: "Not Authorised",
            });
        }
        const payload = jwt.verifyJWT(decoded);
        //fetch user
        const user = await userService.getById(payload.id);
        req.user = user;
    } catch (err) {
        return res.status(500).json({
            success: false,
            data: "Something went wrong",
        });
    }
    next();
}

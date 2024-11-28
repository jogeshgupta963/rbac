import { userService } from "../services/User.js";
import { hash } from "../utils/helpers/hash.js";
import { jwt } from "../utils/helpers/jwt.js";
class AuthController {
    async login(req, res, next) {
        const { email, password } = req.body;

        //searching user
        try {
            const user = await userService.getByEmail(email);
            if (!user) throw new Error("Invalid Credentials");

            //check password

            const isMatch = await hash.compareHash(user.password, password);
            if (!isMatch) throw new Error("Invalid Credentials");

            //generate jwt
            const token = jwt.generateJWT(
                {
                    id: user.id,
                },
                {
                    expiresIn: process.env.JWT_EXPIRATION,
                }
            );
            res.cookie(btoa(process.env.COOKIE_NAME), token, {
                domain:
                    process.env.NODE_ENV === "prod" ? "jogesh.in" : "localhost",
                httpOnly: true,
                secure: process.env.NODE_ENV === "prod",
                maxAge: process.env.COOKIE_EXPIRATION,
            });
            return res.status(200).json({
                success: true,
                data: user,
            });
        } catch (err) {
            next(err);
        }
    }
    async signup(req, res, next) {
        const { name, email, password, role } = req.body;
        try {
            const user = await userService.getByEmail(email);
            if (user) {
                throw new Error("User exists");
            }
            //hashing password
            const hashedPassword = await hash.hashString(password);
            const newUser = await userService.createUser({
                name,
                email,
                password: hashedPassword,
                role,
            });
            //create jwt
            const token = jwt.generateJWT(
                {
                    id: newUser._id,
                },
                {
                    expiresIn: process.env.JWT_EXPIRATION,
                }
            );
            res.cookie(btoa(process.env.COOKIE_NAME), token, {
                domain:
                    process.env.NODE_ENV === "prod" ? "jogesh.in" : "localhost",
                httpOnly: true,
                secure: process.env.NODE_ENV === "prod",
                maxAge: process.env.COOKIE_EXPIRATION,
            });
            return res.status(201).json({
                success: true,
                data: newUser,
            });
        } catch (err) {
            next(err);
        }
    }
}

export const authController = new AuthController();

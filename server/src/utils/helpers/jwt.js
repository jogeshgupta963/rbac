import jsonwebtoken from "jsonwebtoken";
import "dotenv/config";

class JWT {
    generateJWT(payload, options) {
        const token = jsonwebtoken.sign(
            payload,
            process.env.JWT_SECRET,
            options
        );
        return token;
    }

    verifyJWT(jwt) {
        return jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
    }
}

export const jwt = new JWT();

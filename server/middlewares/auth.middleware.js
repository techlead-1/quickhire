import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { JWT_SECRET} from "../config/env.js";

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.token
        console.log("Cookies Token", req.cookies.token)
        if (!token) {
            return res.status(401).json({
                success: false,
                code: "AUTH_NOT_LOGGED_IN",
                message: 'No token provided.'
            });
        }

        const decodedToken = jwt.verify(token, JWT_SECRET);
        let userID = decodedToken.userID;
        let user = await User.findById(userID)
        console.log("User", user)

        if (!user) {
            return res.status(404).json({
                success: false,
                code: "AUTH_NOT_FOUND",
                message: 'User not found.'
            });
        }

        req.user = user;
        next()
    } catch (e) {
        next(e);
    }
}

export default authMiddleware;
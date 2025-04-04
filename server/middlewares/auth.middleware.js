import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(401).json({success: false, message: 'No token provided.'});
        }

        const decodedToken = jwt.verify(token, JWT_SECRET);
        let userID = decodedToken.userID;
        let user = await User.findById(userID)

        if (!user) {
            return res.status(404).json({success: false, message: 'User not found.'});
        }

        req.user = user;
        next()
    } catch (e) {
        next(e);
    }
}
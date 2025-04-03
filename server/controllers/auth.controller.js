import mongoose from "mongoose";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {EXPIRES_IN, JWT_SECRET, NODE_ENV} from "../config/env.js";

export const signUp = async (req, res, next) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password || !role) {
            const error = new Error('Please ensure all required fields are provided.');
            error.statusCode = 400;
            throw error;
        }

        const userExists = await User.findOne({ email }).session(session);
        if (userExists) {
            const error = new Error('User already exists');
            error.statusCode = 409;
            throw error;
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const [user] = await User.create([{
            name,
            email,
            password: hashedPassword,
            role,
        }], { session });

        const token = jwt.sign(
            { userID: user._id, role: user.role },
            JWT_SECRET,
            { expiresIn: EXPIRES_IN }
        );

        res.cookie('token', token, {
            httpOnly: true,
            secure: NODE_ENV === 'production',
            sameSite: 'Strict',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        await session.commitTransaction();
        session.endSession();

        res.status(201).json({
            success: true,
            message: 'User created successfully.',
            data: {
                user,
            }
        });
    } catch (e) {
        console.error(e);

        if (session.inTransaction()) {
            await session.abortTransaction();
        }
        session.endSession();

        next(e);
    }
};


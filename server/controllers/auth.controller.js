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
            let error = new Error('Please ensure all required fields are provided.');
            error.statusCode = 400;
            throw error;
        }

        const userExists = await User.findOne({ email }).session(session);
        if (userExists) {
            let error = new Error('User already exists');
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
            secure: true,
            sameSite: 'None',
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

export const signIn = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            let error = new Error('Please ensure all required fields are provided.');
            error.statusCode = 400;
            throw error;
        }

        let user = await User.findOne({email})
        if (!user) {
            let error = new Error(`User not found`)
            error.statusCode = 404;
            throw error;
        }

        let validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            let error = new Error(`Wrong email or password`);
            error.statusCode = 401;
            throw error;
        }

        let token = jwt.sign({userID: user._id, role: user.role}, JWT_SECRET, { expiresIn: EXPIRES_IN });

        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })

        res.status(200).json({
            success: true,
            message: 'User logged in successfully.',
            data: {
                user: user,
            }
        })
    } catch (e) {
        next(e);
    }
}

export const signOut = async (req, res, next) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: true, // or false for dev
            sameSite: 'None',
        });

        res.status(200).json({
            success: true,
            message: 'User logged out successfully.',
        })
    } catch (err) {
        next(err);
    }
}

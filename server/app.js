import express from 'express';
import {PORT, NODE_ENV, CORS_ORIGIN} from "./config/env.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import jobRouter from "./routes/job.route.js";
import applicationRouter from "./routes/application.route.js";
import authMiddleware from "./middlewares/auth.middleware.js";
import arcjetMiddleware from "./middlewares/arcjet.middleware.js";

const app = express();

console.log("CORS_ORIGIN is:", process.env.CORS_ORIGIN);

app.use(cors({
    origin: CORS_ORIGIN,
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(arcjetMiddleware)

// base route
app.get('/api/v1', (req, res) => {
    res.status(200).json({
        success: true,
        message: "QuickHire API v1 is active",
        version: "1.0.0"
    });
});

// routes for controllers
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', authMiddleware, userRouter)
app.use('/api/v1/jobs', authMiddleware, jobRouter)
app.use('/api/v1/applications', authMiddleware, applicationRouter)

// catch all
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "The requested API endpoint does not exist."
    });
});

app.use(errorMiddleware);

if (NODE_ENV !== 'production') {
    connectToDatabase();
    app.listen(PORT, () => console.log(`Dev server on port ${PORT}`));
} else {
    connectToDatabase();
}

export default app;